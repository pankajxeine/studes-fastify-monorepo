
export type SlaPolicyResponse = 
{
  record_code: string
  sla_policy_id: string
  policy_code: string
  name: string
  calendar_id: string
  is_default: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
