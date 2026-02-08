import type { TimetableCreateRequest } from '../types/TimetableCreateRequest'
import type { TimetableEntry } from '../types/TimetableEntry'
import type { TimetableList } from '../types/TimetableList'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface TimetableController {
  listTimetable(headers?: RequestHeaders): Promise<TimetableList>
  createTimetableEntry(input: TimetableCreateRequest, headers?: RequestHeaders): Promise<TimetableEntry>
}
