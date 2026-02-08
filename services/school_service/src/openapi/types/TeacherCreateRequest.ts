import type { PersonBase } from './PersonBase'

export type TeacherCreateRequest = PersonBase & 
{
  employee_no: string
  department?: string
}
