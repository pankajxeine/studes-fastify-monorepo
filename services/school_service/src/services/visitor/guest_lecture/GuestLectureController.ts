import type { GuestLectureRequest } from './types/GuestLectureRequest'
import type { GuestLectureUpdateRequest } from './types/GuestLectureUpdateRequest'
import type { GuestLectureResponse } from './types/GuestLectureResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface GuestLectureController {
  listGuestLecture(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GuestLectureResponse[]>>>
  createGuestLecture(app: FastifyInstance, input: GuestLectureRequest, request?: FastifyRequest): Promise<GuestLectureResponse>
  getGuestLectureById(app: FastifyInstance, request?: FastifyRequest): Promise<GuestLectureResponse>
  updateGuestLecture(app: FastifyInstance, input: GuestLectureUpdateRequest, request?: FastifyRequest): Promise<GuestLectureResponse>
  deleteGuestLecture(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
