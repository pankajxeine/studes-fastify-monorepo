
export type RetentionPolicyResponse = 
{
  record_code: string
  retention_policy_id: string
  entity_code: string
  description: string
  retention_days: number
  action: string
  legal_basis: string
  updated_at: string
  updated_by?: (string) | null
}
