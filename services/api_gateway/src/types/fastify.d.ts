import 'fastify'

declare module 'fastify' {
  interface FastifyContextConfig {
    requireTenant?: boolean
    requireAuth?: boolean
  }
}

export {}
