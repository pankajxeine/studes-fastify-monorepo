import ApiGatewayRoutes from './api_gateway.router'

import type { FastifyInstance } from 'fastify'

export default async function registerRoutes(app: FastifyInstance) {
  await app.register(ApiGatewayRoutes)
}
