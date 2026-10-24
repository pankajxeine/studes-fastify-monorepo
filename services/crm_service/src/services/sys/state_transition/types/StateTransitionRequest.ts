
export type StateTransitionRequest = 
{
  entity: string
  from_state: string
  to_state: string
  description?: (string) | null
}
