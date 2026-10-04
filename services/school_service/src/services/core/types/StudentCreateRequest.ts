import type { PersonBase } from './PersonBase'

export type StudentCreateRequest = PersonBase & 
{
  admission_no: string
  grade_level?: string
  section?: string
}
