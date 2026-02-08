import { FastifyInstance, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'

const SENSITIVE_KEYS = new Set(['password', 'token', 'authorization', 'cookie', 'set-cookie'])

function redact(value: unknown): unknown {
  if (value && typeof value === 'object') {
    if (Array.isArray(value)) {
      return value.map(redact)
    }

    const obj = value as Record<string, unknown>
    const out: Record<string, unknown> = {}

    for (const [key, val] of Object.entries(obj)) {
      if (SENSITIVE_KEYS.has(key.toLowerCase())) {
        out[key] = '[REDACTED]'
      } else {
        out[key] = redact(val)
      }
    }

    return out
  }

  return value
}

export default fp(async (app: FastifyInstance) => {
  app.addHook('preValidation', async (request: FastifyRequest) => {
    const body = request.body ?? null
    request.log.info(
      {
        method: request.method,
        url: request.url,
        headers: redact(request.headers),
        body: redact(body)
      },
      'request received'
    )
  })
})
