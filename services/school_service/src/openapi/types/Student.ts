import type { StudentCreateRequest } from './StudentCreateRequest'

export type Student = StudentCreateRequest & 
{
  id: string
}
