import type { SubscriptionPlansRequest } from './types/SubscriptionPlansRequest'
import type { SubscriptionPlansResponse } from './types/SubscriptionPlansResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface SubscriptionPlansController {
  listSubscriptionPlans(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionPlansResponse[]>
  createSubscriptionPlan(app: FastifyInstance, input: SubscriptionPlansRequest, request?: FastifyRequest): Promise<SubscriptionPlansResponse>
  getSubscriptionPlansById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionPlansResponse>
  updateSubscriptionPlan(app: FastifyInstance, input: SubscriptionPlansRequest, request?: FastifyRequest): Promise<SubscriptionPlansResponse>
  deleteSubscriptionPlan(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
