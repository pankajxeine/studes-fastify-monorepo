import fp from 'fastify-plugin'
import { escapeId } from 'mysql2'
import mysql from 'mysql2/promise'
import type { Pool, PoolConnection } from 'mysql2/promise'
import type { FastifyBaseLogger, FastifyTypeProvider, FastifyTypeProviderDefault, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault } from 'fastify'
import { Sequelize } from 'sequelize'

import config from '../config/db.config'
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/db.config.ts")[env];
const db: any = {};

const ds = config[env];
export type MysqlConnection = PoolConnection

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

  const pool = mysql.createPool({
    host: url.hostname,
    port: url.port ? Number(url.port) : 3306,
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database,
    waitForConnections: true,
    connectionLimit: 10,
    multipleStatements: true
  })

  const sequelize = new Sequelize(ds.database, ds.username, ds.password, {
    host: ds.host,
    dialect: 'mysql',
    logging: false,
  });
  app.decorate('sequelize', sequelize)
  app.decorate('mysql', pool)
  app.decorate('mysqlDatabase', database)
  app.decorate('useTenantDatabase', async (connection: PoolConnection, database: string) => {
    await connection.query(`use ${escapeId(database)}`)
  })

  app.addHook('onClose', async () => {
    await pool.end()
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
    mysql: Pool
    mysqlDatabase: string
    useTenantDatabase: (connection: PoolConnection, database: string) => Promise<void>
  }
}
