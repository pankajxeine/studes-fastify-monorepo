import fp from 'fastify-plugin'
import type { FastifyInstance } from 'fastify'
import { Sequelize } from 'sequelize'
import config from '../core/config/db.config'

const environment = process.env.NODE_ENV || 'development'
const databaseConfig = config[environment]

export const sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
  host: databaseConfig.host,
  port: 5432,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 10,
    min: 0,
    idle: 10_000,
  },
  hooks: {
    afterConnect: async (connection: { query: (sql: string) => Promise<unknown> }) => {
      const schema = process.env.DEFAULT_CPANEL_SCHEMA ?? 'demo_cpanel'
      if (!/^[a-zA-Z0-9_]+$/.test(schema)) {
        throw new Error('Invalid DEFAULT_CPANEL_SCHEMA')
      }
      await connection.query(`SET search_path TO "${schema}", public`)
    },
  },
})

export default fp(async (app) => {
  const connectionString = app.env.DATABASE_URL
  if (!connectionString) {
    throw new Error('DATABASE_URL is required')
  }

  const database = new URL(connectionString).pathname.replace(/^\//, '')
  if (!database) {
    throw new Error('DATABASE_URL must include a database name')
  }

  app.decorate('db', sequelize)
  app.addHook('onClose', async () => {
    await sequelize.close()
  })
})

declare module 'fastify' {
  interface FastifyInstance {
    db: Sequelize
  }
}
