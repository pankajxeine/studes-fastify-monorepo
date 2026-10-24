
export type DunningPolicyResponse = 
{
  id: number
  public_id: string
  record_code: string
  dunning_policy_id: string
  policy_code: string
  name: string
  is_default: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
