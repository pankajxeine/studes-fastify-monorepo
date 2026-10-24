
export type EntitlementOverrideResponse = 
{
  id: number
  public_id: string
  record_code: string
  override_id: string
  tenant_application_id: string
  module_id: string
  feature_id?: (string) | null
  value: unknown
  reason: string
  ticket_ref?: (string) | null
  status: string
  requested_by_user_id: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  valid_from: string
  valid_to: string
  revoked_at?: (string) | null
  created_at: string
  updated_at: string
}
