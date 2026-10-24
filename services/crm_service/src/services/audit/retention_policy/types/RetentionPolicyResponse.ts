
export type RetentionPolicyResponse = 
{
  id: number
  public_id: string
  record_code: string
  entity_code: string
  description: string
  retention_days: number
  action: string
  legal_basis: string
  updated_at: string
  updated_by?: (string) | null
}
