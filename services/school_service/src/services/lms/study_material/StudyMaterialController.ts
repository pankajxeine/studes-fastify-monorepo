import type { StudyMaterialRequest } from './types/StudyMaterialRequest'
import type { StudyMaterialUpdateRequest } from './types/StudyMaterialUpdateRequest'
import type { StudyMaterialResponse } from './types/StudyMaterialResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudyMaterialController {
  listStudyMaterial(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudyMaterialResponse[]>>>
  createStudyMaterial(app: FastifyInstance, input: StudyMaterialRequest, request?: FastifyRequest): Promise<StudyMaterialResponse>
  getStudyMaterialById(app: FastifyInstance, request?: FastifyRequest): Promise<StudyMaterialResponse>
  updateStudyMaterial(app: FastifyInstance, input: StudyMaterialUpdateRequest, request?: FastifyRequest): Promise<StudyMaterialResponse>
  deleteStudyMaterial(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
