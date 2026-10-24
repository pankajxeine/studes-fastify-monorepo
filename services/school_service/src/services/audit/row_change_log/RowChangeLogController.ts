import type { RowChangeLogRequest } from './types/RowChangeLogRequest'
import type { RowChangeLogUpdateRequest } from './types/RowChangeLogUpdateRequest'
import type { RowChangeLogResponse } from './types/RowChangeLogResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RowChangeLogController {
  listRowChangeLog(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RowChangeLogResponse[]>>>
  createRowChangeLog(app: FastifyInstance, input: RowChangeLogRequest, request?: FastifyRequest): Promise<RowChangeLogResponse>
  getRowChangeLogById(app: FastifyInstance, request?: FastifyRequest): Promise<RowChangeLogResponse>
  updateRowChangeLog(app: FastifyInstance, input: RowChangeLogUpdateRequest, request?: FastifyRequest): Promise<RowChangeLogResponse>
  deleteRowChangeLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
