import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'
import * as client from 'prom-client'

type MetricsOptions = {
  path?: string
  isPublic?: boolean
}

export function createMetricsPlugin(options: MetricsOptions = {}) {
  return fp(async (app: FastifyInstance) => {
    const register = new client.Registry()
    client.collectDefaultMetrics({ register })

    const httpDuration = new client.Histogram({
      name: 'http_request_duration_ms',
      help: 'Duration of HTTP requests in ms',
      labelNames: ['method', 'route', 'status'],
      registers: [register]
    })

    app.addHook('onResponse', async (request: FastifyRequest, reply: FastifyReply) => {
      const route = request.routeOptions?.url ?? request.url
      httpDuration.labels(request.method, route, String(reply.statusCode)).observe(reply.elapsedTime)
    })

    app.get(
      options.path ?? '/metrics',
      { config: { isPublic: options.isPublic ?? false } },
      async (_req: FastifyRequest, reply: FastifyReply) => {
      reply.header('content-type', register.contentType)
      return register.metrics()
      }
    )
  })
}
