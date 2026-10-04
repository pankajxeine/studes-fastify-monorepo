import NotificationRoutes from './notification.router'

import type { FastifyInstance } from 'fastify'

export default async function registerRoutes(app: FastifyInstance) {
  await app.register(NotificationRoutes)
}
