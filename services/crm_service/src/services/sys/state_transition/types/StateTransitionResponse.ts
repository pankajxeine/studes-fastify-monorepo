
export type StateTransitionResponse = 
{
  id: number
  public_id: string
  record_code: string
  entity: string
  from_state: string
  to_state: string
  description?: (string) | null
}
