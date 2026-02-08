import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'
import * as client from 'prom-client'

type MetricsOptions = {
  includeTenant?: boolean
  path?: string
  requireTenant?: boolean
  requireAuth?: boolean
}

export function createMetricsPlugin(options: MetricsOptions = {}) {
  return fp(async (app: FastifyInstance) => {
    const register = new client.Registry()
    client.collectDefaultMetrics({ register })

    const labelNames = options.includeTenant ? ['method', 'route', 'status', 'tenant'] : ['method', 'route', 'status']
    const httpDuration = new client.Histogram({
      name: 'http_request_duration_ms',
      help: 'Duration of HTTP requests in ms',
      labelNames,
      registers: [register]
    })

    app.addHook('onResponse', async (request: FastifyRequest, reply: FastifyReply) => {
      const route = request.routeOptions?.url ?? request.url
      if (options.includeTenant) {
        const tenant = (request as any).tenant?.slug ?? 'unknown'
        httpDuration.labels(request.method, route, String(reply.statusCode), tenant).observe(reply.elapsedTime)
      } else {
        httpDuration.labels(request.method, route, String(reply.statusCode)).observe(reply.elapsedTime)
      }
    })

    app.get(
      options.path ?? '/metrics',
      { config: { requireTenant: options.requireTenant ?? false, requireAuth: options.requireAuth ?? false } },
      async (_req: FastifyRequest, reply: FastifyReply) => {
      reply.header('content-type', register.contentType)
      return register.metrics()
      }
    )
  })
}
