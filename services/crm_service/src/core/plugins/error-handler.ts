import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

type ErrorHandlerOptions = {
  includeZod?: boolean
}

function isAppErrorLike(error: unknown): error is { statusCode: number; name: string; message: string; details?: unknown } {
  if (!error || typeof error !== 'object') return false
  const candidate = error as { statusCode?: unknown; name?: unknown; message?: unknown }
  return typeof candidate.statusCode === 'number' && typeof candidate.name === 'string' && typeof candidate.message === 'string'
}

export function registerErrorHandler(app: FastifyInstance, options: ErrorHandlerOptions = {}) {
  app.setErrorHandler((error: unknown, request: FastifyRequest, reply: FastifyReply) => {
    if (options.includeZod && error instanceof ZodError) {
      const zodError = error as ZodError
      request.log.warn(
        {
          method: request.method,
          url: request.url,
          error: 'ValidationError',
          details: zodError.flatten()
        },
        'request validation failed'
      )
      reply.code(400).send({
        error: 'ValidationError',
        message: 'Invalid request',
        details: zodError.flatten()
      })
      return
    }

    if (isAppErrorLike(error)) {
      request.log.warn(
        {
          method: request.method,
          url: request.url,
          error: error.name,
          statusCode: error.statusCode,
          details: error.details ?? null
        },
        'request failed'
      )
      reply.code(error.statusCode).send({
        error: error.name,
        message: error.message,
        details: error.details ?? null
      })
      return
    }

    request.log.error(
      {
        method: request.method,
        url: request.url,
        err: error
      },
      'request failed unexpectedly'
    )
    reply.code(500).send({
      error: 'InternalServerError',
      message: 'Unexpected error'
    })
  })
}

