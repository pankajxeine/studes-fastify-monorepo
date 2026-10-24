import type { DataAccessLogRequest } from './types/DataAccessLogRequest'
import type { DataAccessLogUpdateRequest } from './types/DataAccessLogUpdateRequest'
import type { DataAccessLogResponse } from './types/DataAccessLogResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DataAccessLogController {
  listDataAccessLog(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DataAccessLogResponse[]>>>
  createDataAccessLog(app: FastifyInstance, input: DataAccessLogRequest, request?: FastifyRequest): Promise<DataAccessLogResponse>
  getDataAccessLogById(app: FastifyInstance, request?: FastifyRequest): Promise<DataAccessLogResponse>
  updateDataAccessLog(app: FastifyInstance, input: DataAccessLogUpdateRequest, request?: FastifyRequest): Promise<DataAccessLogResponse>
  deleteDataAccessLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
