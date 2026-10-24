import type { FileRequest } from './types/FileRequest'
import type { FileUpdateRequest } from './types/FileUpdateRequest'
import type { FileResponse } from './types/FileResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface FileController {
  listFile(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FileResponse[]>>>
  createFile(app: FastifyInstance, input: FileRequest, request?: FastifyRequest): Promise<FileResponse>
  getFileById(app: FastifyInstance, request?: FastifyRequest): Promise<FileResponse>
  updateFile(app: FastifyInstance, input: FileUpdateRequest, request?: FastifyRequest): Promise<FileResponse>
  deleteFile(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
