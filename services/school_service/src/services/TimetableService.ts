import type { TimetableCreateRequest } from '../openapi/types/TimetableCreateRequest'
import type { TimetableEntry } from '../openapi/types/TimetableEntry'
import type { TimetableList } from '../openapi/types/TimetableList'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { TimetableController } from '../openapi/controller/TimetableController'

export class TimetableService implements TimetableController {
  public async listTimetable(app: FastifyInstance,request?: FastifyRequest): Promise<TimetableList> {
    void request
    throw new Error('Not implemented')
  }

  public async createTimetableEntry(app: FastifyInstance, input: TimetableCreateRequest, request?: FastifyRequest): Promise<TimetableEntry> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
