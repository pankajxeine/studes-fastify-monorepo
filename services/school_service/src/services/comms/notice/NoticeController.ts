import type { NoticeRequest } from './types/NoticeRequest'
import type { NoticeUpdateRequest } from './types/NoticeUpdateRequest'
import type { NoticeResponse } from './types/NoticeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface NoticeController {
  listNotice(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NoticeResponse[]>>>
  createNotice(app: FastifyInstance, input: NoticeRequest, request?: FastifyRequest): Promise<NoticeResponse>
  getNoticeById(app: FastifyInstance, request?: FastifyRequest): Promise<NoticeResponse>
  updateNotice(app: FastifyInstance, input: NoticeUpdateRequest, request?: FastifyRequest): Promise<NoticeResponse>
  deleteNotice(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
