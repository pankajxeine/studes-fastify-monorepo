import { FastifyPluginAsync } from 'fastify'
import { z } from 'zod'
import * as bcrypt from 'bcryptjs'
import { UnauthorizedError, ConflictError } from '../core';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const authRoutes: FastifyPluginAsync = async (app) => {
  app.post('/auth/register', async (request, reply) => {
    const body = registerSchema.parse(request.body)

    const existing = await request.db!.query('select id from users where email = $1', [body.email])
    if (existing.rowCount && existing.rowCount > 0) {
      throw new ConflictError('Email already registered')
    }

    const hash = await bcrypt.hash(body.password, 12)
    const result = await request.db!.query(
      'insert into users (email, password_hash) values ($1, $2) returning id, email, created_at',
      [body.email, hash]
    )

    reply.code(201)
    return result.rows[0]
  })

  app.post('/auth/login', async (request, reply) => {
    const body = loginSchema.parse(request.body)

    const result = await request.db!.query('select id, email, password_hash from users where email = $1', [body.email])
    if (result.rowCount === 0) {
      throw new UnauthorizedError('Invalid credentials')
    }

    const user = result.rows[0]
    const ok = await bcrypt.compare(body.password, user.password_hash)
    if (!ok) {
      throw new UnauthorizedError('Invalid credentials')
    }

    const token = app.jwt.sign({ sub: user.id, email: user.email })
    reply.setCookie(app.env.SESSION_COOKIE_NAME, token, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax'
    })

    return { accessToken: token }
  })

  app.post('/auth/logout', async (_request, reply) => {
    reply.clearCookie(app.env.SESSION_COOKIE_NAME, { path: '/' })
    reply.code(204)
    return null
  })
}

export default authRoutes

