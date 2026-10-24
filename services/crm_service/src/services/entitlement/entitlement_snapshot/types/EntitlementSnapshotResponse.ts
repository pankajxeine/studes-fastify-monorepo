
export type EntitlementSnapshotResponse = 
{
  id: number
  public_id: string
  record_code: string
  tenant_application_id: string
  version: number
  access_mode: string
  reason: string
  valid_until: string
  payload: unknown
  payload_hash: string
  computed_at: string
}
