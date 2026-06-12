import type { TimetableCreateRequest } from '../types/TimetableCreateRequest'
import type { TimetableEntry } from '../types/TimetableEntry'
import type { TimetableList } from '../types/TimetableList'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface TimetableController {
  listTimetable(app: FastifyInstance, request?: FastifyRequest): Promise<TimetableList>
  createTimetableEntry(app: FastifyInstance, input: TimetableCreateRequest, request?: FastifyRequest): Promise<TimetableEntry>
}
