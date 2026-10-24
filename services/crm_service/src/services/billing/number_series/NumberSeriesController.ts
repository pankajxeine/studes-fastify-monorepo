import type { NumberSeriesRequest } from './types/NumberSeriesRequest'
import type { NumberSeriesUpdateRequest } from './types/NumberSeriesUpdateRequest'
import type { NumberSeriesResponse } from './types/NumberSeriesResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface NumberSeriesController {
  listNumberSeries(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NumberSeriesResponse[]>>>
  createNumberSeries(app: FastifyInstance, input: NumberSeriesRequest, request?: FastifyRequest): Promise<NumberSeriesResponse>
  getNumberSeriesById(app: FastifyInstance, request?: FastifyRequest): Promise<NumberSeriesResponse>
  updateNumberSeries(app: FastifyInstance, input: NumberSeriesUpdateRequest, request?: FastifyRequest): Promise<NumberSeriesResponse>
  deleteNumberSeries(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
