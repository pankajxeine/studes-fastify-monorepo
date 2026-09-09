import fp from 'fastify-plugin'
import type { FastifyBaseLogger, FastifyTypeProvider, FastifyTypeProviderDefault, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault } from 'fastify'
import { Sequelize } from 'sequelize'

import config from '../config/db.config'
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

const db: any = {};

const ds = config[env];
// export type MysqlConnection = PoolConnection
export const sequelize: Sequelize = new Sequelize(ds.database, ds.username, ds.password, {
  host: ds.host,
  port: 5432,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 10,   // keep small if using PgBouncer
    min: 0,
    idle: 10000,
  },
})

export default fp(async (app) => {
  const connectionString = app.env?.DATABASE_URL ?? process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error('DATABASE_URL is required')
  }
  const url = new URL(connectionString)
  const database = url.pathname.replace(/^\//, '')
  if (!database) {
    throw new Error('DATABASE_URL must include a database name')
  }

  // const pool = mysql.createPool({
  //   host: url.hostname,
  //   port: url.port ? Number(url.port) : 3306,
  //   user: decodeURIComponent(url.username),
  //   password: decodeURIComponent(url.password),
  //   database,
  //   waitForConnections: true,
  //   connectionLimit: 10,
  //   multipleStatements: true
  // })

  //initGeneratedEntities(sequelize)
  //app.decorate('sequelize', sequelize)
  // app.decorate('mysql', pool)
  //app.decorate('mysqlDatabase', database)
  app.decorate('useTenantDatabase', async (_database: string) => {
    throw new Error('Database-per-tenant is retired; use tenant_id scoped queries')
  })
  app.decorate('useCpanelDatabase', async (_database: string) => {
    throw new Error('Database-per-tenant is retired; use tenant_id scoped queries')
  })

  app.addHook('onClose', async () => {
    await sequelize.close()
  })
})

declare module 'fastify' {
  interface FastifyInstance<
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
    RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
  > {
    sequelize: Sequelize
    // mysql: Pool
    mysqlDatabase: string
    useTenantDatabase: (database: string) => Promise<void>
    useCpanelDatabase: (database: string) => Promise<void>
  }
}
