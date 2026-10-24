import type { ChannelProviderRequest } from './types/ChannelProviderRequest'
import type { ChannelProviderUpdateRequest } from './types/ChannelProviderUpdateRequest'
import type { ChannelProviderResponse } from './types/ChannelProviderResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ChannelProviderController {
  listChannelProvider(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ChannelProviderResponse[]>>>
  createChannelProvider(app: FastifyInstance, input: ChannelProviderRequest, request?: FastifyRequest): Promise<ChannelProviderResponse>
  getChannelProviderById(app: FastifyInstance, request?: FastifyRequest): Promise<ChannelProviderResponse>
  updateChannelProvider(app: FastifyInstance, input: ChannelProviderUpdateRequest, request?: FastifyRequest): Promise<ChannelProviderResponse>
  deleteChannelProvider(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
