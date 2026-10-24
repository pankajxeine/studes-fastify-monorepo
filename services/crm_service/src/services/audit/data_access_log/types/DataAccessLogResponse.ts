
export type DataAccessLogResponse = 
{
  id: number
  public_id: string
  record_code: string
  data_access_log_id: string
  app_user_id?: (string) | null
  tenant_id?: (string) | null
  resource: string
  record_id?: (string) | null
  purpose: string
  fields?: (string) | null
  accessed_at: string
}
