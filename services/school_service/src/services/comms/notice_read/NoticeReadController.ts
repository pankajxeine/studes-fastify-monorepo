import type { NoticeReadRequest } from './types/NoticeReadRequest'
import type { NoticeReadUpdateRequest } from './types/NoticeReadUpdateRequest'
import type { NoticeReadResponse } from './types/NoticeReadResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface NoticeReadController {
  listNoticeRead(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NoticeReadResponse[]>>>
  createNoticeRead(app: FastifyInstance, input: NoticeReadRequest, request?: FastifyRequest): Promise<NoticeReadResponse>
  getNoticeReadById(app: FastifyInstance, request?: FastifyRequest): Promise<NoticeReadResponse>
  updateNoticeRead(app: FastifyInstance, input: NoticeReadUpdateRequest, request?: FastifyRequest): Promise<NoticeReadResponse>
  deleteNoticeRead(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
