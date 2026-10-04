import SampleFastifySequelizeRoutes from './sample_fastify_sequelize.router'

import type { FastifyInstance } from 'fastify'

export default async function registerRoutes(app: FastifyInstance) {
  await app.register(SampleFastifySequelizeRoutes)
}
