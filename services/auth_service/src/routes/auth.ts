import { FastifyPluginAsync } from 'fastify'
import { z } from 'zod'
import * as bcrypt from 'bcryptjs'
import type { ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import { UnauthorizedError, ConflictError } from '../core'

type UserRow = RowDataPacket & {
  id: string
  email: string
  password_hash?: string
  created_at?: Date
}

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
    request.log.info('auth register started')
    const body = registerSchema.parse(request.body)

    request.log.info({ email: body.email }, 'auth register checking existing user')
    const [existing] = await request.db!.execute<UserRow[]>('select id from users where email = ?', [body.email])
    if (existing.length > 0) {
      request.log.warn({ email: body.email }, 'auth register failed: email already registered')
      throw new ConflictError('Email already registered')
    }

    request.log.info({ email: body.email }, 'auth register hashing password')
    const hash = await bcrypt.hash(body.password, 12)
    await request.db!.execute<ResultSetHeader>(
      'insert into users (email, password_hash) values (?, ?)',
      [body.email, hash]
    )
    request.log.info({ email: body.email }, 'auth register user inserted')

    const [users] = await request.db!.execute<UserRow[]>(
      'select id, email, created_at from users where email = ? limit 1',
      [body.email]
    )

    reply.code(201)
    request.log.info({ userId: users[0]?.id, email: users[0]?.email }, 'auth register completed')
    return users[0]
  })

  app.post('/auth/login', async (request, reply) => {
    request.log.info('auth login started')
    const body = loginSchema.parse(request.body)

    request.log.info({ email: body.email }, 'auth login loading user')
    const [users] = await request.db!.execute<UserRow[]>(
      'select id, email, password_hash from users where email = ? limit 1',
      [body.email]
    )
    if (users.length === 0) {
      request.log.warn({ email: body.email }, 'auth login failed: user not found')
      throw new UnauthorizedError('Invalid credentials')
    }

    const user = users[0]
    request.log.info({ userId: user.id, email: user.email }, 'auth login verifying password')
    const ok = await bcrypt.compare(body.password, user.password_hash ?? '')
    if (!ok) {
      request.log.warn({ userId: user.id, email: user.email }, 'auth login failed: invalid password')
      throw new UnauthorizedError('Invalid credentials')
    }

    const token = app.jwt.sign({ sub: user.id, email: user.email })
    request.log.info({ userId: user.id, email: user.email }, 'auth login token created')
    reply.setCookie(app.env.SESSION_COOKIE_NAME, token, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax'
    })

    request.log.info({ userId: user.id, email: user.email }, 'auth login completed')
    return { accessToken: token }
  })

  app.post('/auth/logout', async (_request, reply) => {
    _request.log.info('auth logout started')
    reply.clearCookie(app.env.SESSION_COOKIE_NAME, { path: '/' })
    reply.code(204)
    _request.log.info('auth logout completed')
    return null
  })
}

export default authRoutes
