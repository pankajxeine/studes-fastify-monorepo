import type { TimetableCreateRequest } from './TimetableCreateRequest'

export type TimetableEntry = TimetableCreateRequest & 
{
  id: string
}
