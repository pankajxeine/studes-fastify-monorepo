import type { OnboardingRequestRequest } from './types/OnboardingRequestRequest'
import type { OnboardingRequestUpdateRequest } from './types/OnboardingRequestUpdateRequest'
import type { OnboardingRequestResponse } from './types/OnboardingRequestResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface OnboardingRequestController {
  listOnboardingRequest(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OnboardingRequestResponse[]>>>
  createOnboardingRequest(app: FastifyInstance, input: OnboardingRequestRequest, request?: FastifyRequest): Promise<OnboardingRequestResponse>
  getOnboardingRequestById(app: FastifyInstance, request?: FastifyRequest): Promise<OnboardingRequestResponse>
  updateOnboardingRequest(app: FastifyInstance, input: OnboardingRequestUpdateRequest, request?: FastifyRequest): Promise<OnboardingRequestResponse>
  deleteOnboardingRequest(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
