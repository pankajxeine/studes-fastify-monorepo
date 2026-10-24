
export type DataAccessLogUpdateRequest = 
{
  app_user_id: (string) | null
  tenant_id: (string) | null
  resource: string
  record_id: (string) | null
  purpose: string
  fields: (string) | null
  accessed_at: string
}
