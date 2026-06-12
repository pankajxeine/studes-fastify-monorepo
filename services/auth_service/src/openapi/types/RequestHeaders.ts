import { FastifyRequest } from "fastify";

export type RequestHeaders = { tenantId?: string; tenantSlug?: string; authorization?: string }
