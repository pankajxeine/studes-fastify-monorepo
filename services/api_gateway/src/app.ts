import fastifyFactory, { FastifyInstance } from 'fastify'
import envPlugin from './plugins/env'
import {
  requestIdPlugin,
  requestLoggerPlugin,
  requestBodyLoggerPlugin,
  createMetricsPlugin,
  registerErrorHandler
} from './core';
import authPlugin from './plugins/auth'
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

  await fastify.register(requestIdPlugin)
  await fastify.register(requestBodyLoggerPlugin)
  await fastify.register(requestLoggerPlugin)
  await fastify.register(createMetricsPlugin())

  const rateLimitMax = Number(fastify.env?.RATE_LIMIT_MAX ?? process.env.RATE_LIMIT_MAX ?? '120')
  const rateLimitWindow = fastify.env?.RATE_LIMIT_WINDOW ?? process.env.RATE_LIMIT_WINDOW ?? '60 seconds'

  await fastify.register((await import('@fastify/rate-limit')).default, {
    max: rateLimitMax,
    timeWindow: rateLimitWindow,
    addHeaders: {
      'x-ratelimit-limit': true,
      'x-ratelimit-remaining': true,
      'x-ratelimit-reset': true
    }
  })

  await fastify.register(authPlugin)

  registerErrorHandler(fastify)

  // await registerGeneratedRoutes(fastify)

  await fastify.register((await import('@fastify/http-proxy')).default, {
    upstream: fastify.env?.SERVICE_AUTH_URL ?? process.env.SERVICE_AUTH_URL ?? '',
    prefix: '/auth',
    rewritePrefix: '/auth'
  })

  await fastify.register((await import('@fastify/http-proxy')).default, {
    upstream: fastify.env?.SERVICE_BILLING_URL ?? process.env.SERVICE_BILLING_URL ?? '',
    prefix: '/billing',
    rewritePrefix: '/billing'
  })

  await fastify.register((await import('@fastify/http-proxy')).default, {
    upstream: fastify.env?.SERVICE_NOTIFICATION_URL ?? process.env.SERVICE_NOTIFICATION_URL ?? '',
    prefix: '/notifications',
    rewritePrefix: '/notifications'
  })

  await fastify.register((await import('@fastify/http-proxy')).default, {
    upstream: fastify.env?.SERVICE_SCHOOL_URL ?? process.env.SERVICE_SCHOOL_URL ?? '',
    prefix: '/school',
    rewritePrefix: '/school'
  })

  await fastify.register((await import('@fastify/http-proxy')).default, {
    upstream: fastify.env?.SERVICE_CRM_URL ?? process.env.SERVICE_CRM_URL ?? '',
    prefix: '/crm',
    rewritePrefix: '/crm'
  })

  return fastify
}


