import fastifyFactory, { FastifyInstance } from 'fastify'
import envPlugin from './plugins/env'
import dbPlugin from './plugins/db'
import tenantPlugin from './plugins/tenant'
import authPlugin from './plugins/auth'
import { createMetricsPlugin, registerErrorHandler } from './core'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

async function registerGeneratedRoutes(app: FastifyInstance) {
  const routesDir = join(__dirname, 'routes')
  for (const file of readdirSync(routesDir)) {
    if (!(file.endsWith('router.ts') || file.endsWith('router.js'))) continue
    const mod = await import(join(routesDir, file))
    if (mod?.default) {
      await app.register(mod.default)
    }
  }
}

export async function buildApp(): Promise<FastifyInstance> {
  const fastify = fastifyFactory({
    logger: { level: process.env.LOG_LEVEL ?? 'info' }
  })

  await fastify.register(envPlugin)

  const corsOrigin = fastify.env?.CORS_ORIGIN ?? process.env.CORS_ORIGIN ?? '*'
  await fastify.register((await import('@fastify/helmet')).default)
  await fastify.register((await import('@fastify/cors')).default, {
    origin: corsOrigin
  })

  await fastify.register(dbPlugin)
  await fastify.register(tenantPlugin)
  await fastify.register((await import('@fastify/jwt')).default, { secret: fastify.env?.JWT_SECRET ?? process.env.JWT_SECRET ?? '' })
  await fastify.register(authPlugin)
  await fastify.register(createMetricsPlugin({ includeTenant: true }))

  registerErrorHandler(fastify, { includeZod: true })

  await registerGeneratedRoutes(fastify)

  return fastify
}





