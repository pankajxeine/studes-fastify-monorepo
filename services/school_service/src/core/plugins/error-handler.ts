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
  app.setErrorHandler((error: unknown, _req: FastifyRequest, reply: FastifyReply) => {
    if (options.includeZod && error instanceof ZodError) {
      const zodError = error as ZodError
      reply.code(400).send({
        error: 'ValidationError',
        message: 'Invalid request',
        details: zodError.flatten()
      })
      return
    }

    if (isAppErrorLike(error)) {
      reply.code(error.statusCode).send({
        error: error.name,
        message: error.message,
        details: error.details ?? null
      })
      return
    }

    app.log.error(error)
    reply.code(500).send({
      error: 'InternalServerError',
      message: 'Unexpected error'
    })
  })
}

