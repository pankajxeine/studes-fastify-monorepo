import { FastifyRequest, FastifyReply } from 'fastify'
import { UnauthorizedError } from '../core'

export async function jwtAuthGuard(request: FastifyRequest, reply: FastifyReply) {
    try {
        const token = extractToken(request)
        if (!token) {
            throw new UnauthorizedError('Authorization token is required')
        }

        // Verify token using Fastify JWT plugin
        await request.jwtVerify()
    } catch (error: any) {
        throw new UnauthorizedError('Invalid or expired token', error.message)
    }
}

export function extractToken(request: FastifyRequest): string | null {
    const authHeader = request.headers.authorization
    if (!authHeader) {
        return null
    }

    const parts = authHeader.split(' ')
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return null
    }

    return parts[1]
}

export function getTokenPayload(request: FastifyRequest): any {
    return request.user
}
