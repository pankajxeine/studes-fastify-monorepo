
export type DeprovisionRequestResponse = 
{
  record_code: string
  deprovision_request_id: string
  tenant_id: string
  reason: string
  export_requested: boolean
  export_ref?: (string) | null
  retention_until?: (string) | null
  status: string
  requested_by_user_id: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  completed_at?: (string) | null
  created_at: string
  updated_at: string
}
