
export type StateTransitionResponse = 
{
  record_code: string
  state_transition_id: string
  entity: string
  from_state: string
  to_state: string
  description?: (string) | null
}
