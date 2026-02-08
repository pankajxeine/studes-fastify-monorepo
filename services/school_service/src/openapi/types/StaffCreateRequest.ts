import type { PersonBase } from './PersonBase'

export type StaffCreateRequest = PersonBase & 
{
  employee_no: string
  staff_type?: string
}
