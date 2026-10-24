import type { KbArticleRequest } from './types/KbArticleRequest'
import type { KbArticleUpdateRequest } from './types/KbArticleUpdateRequest'
import type { KbArticleResponse } from './types/KbArticleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface KbArticleController {
  listKbArticle(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<KbArticleResponse[]>>>
  createKbArticle(app: FastifyInstance, input: KbArticleRequest, request?: FastifyRequest): Promise<KbArticleResponse>
  getKbArticleById(app: FastifyInstance, request?: FastifyRequest): Promise<KbArticleResponse>
  updateKbArticle(app: FastifyInstance, input: KbArticleUpdateRequest, request?: FastifyRequest): Promise<KbArticleResponse>
  deleteKbArticle(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
