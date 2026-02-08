import type { TimetableCreateRequest } from '../openapi/types/TimetableCreateRequest'
import type { TimetableEntry } from '../openapi/types/TimetableEntry'
import type { TimetableList } from '../openapi/types/TimetableList'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { TimetableController } from '../openapi/controller/TimetableController'

export class TimetableService implements TimetableController {
  public async listTimetable(headers?: RequestHeaders): Promise<TimetableList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createTimetableEntry(input: TimetableCreateRequest, headers?: RequestHeaders): Promise<TimetableEntry> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
