import type { NoticeAudienceRequest } from './types/NoticeAudienceRequest'
import type { NoticeAudienceUpdateRequest } from './types/NoticeAudienceUpdateRequest'
import type { NoticeAudienceResponse } from './types/NoticeAudienceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface NoticeAudienceController {
  listNoticeAudience(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NoticeAudienceResponse[]>>>
  createNoticeAudience(app: FastifyInstance, input: NoticeAudienceRequest, request?: FastifyRequest): Promise<NoticeAudienceResponse>
  getNoticeAudienceById(app: FastifyInstance, request?: FastifyRequest): Promise<NoticeAudienceResponse>
  updateNoticeAudience(app: FastifyInstance, input: NoticeAudienceUpdateRequest, request?: FastifyRequest): Promise<NoticeAudienceResponse>
  deleteNoticeAudience(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
