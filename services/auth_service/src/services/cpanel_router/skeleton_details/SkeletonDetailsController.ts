import type { SkeletonDetailsRequest } from './types/SkeletonDetailsRequest'
import type { SkeletonDetailsResponse } from './types/SkeletonDetailsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface SkeletonDetailsController {
  listSkeletonDetails(app: FastifyInstance, request?: FastifyRequest): Promise<SkeletonDetailsResponse[]>
  createSkeletonDetail(app: FastifyInstance, input: SkeletonDetailsRequest, request?: FastifyRequest): Promise<SkeletonDetailsResponse>
  getSkeletonDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<SkeletonDetailsResponse>
  updateSkeletonDetail(app: FastifyInstance, input: SkeletonDetailsRequest, request?: FastifyRequest): Promise<SkeletonDetailsResponse>
  deleteSkeletonDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
