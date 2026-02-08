import type { PersonBase } from './PersonBase'

export type ParentCreateRequest = PersonBase & 
{
  occupation?: string
}
