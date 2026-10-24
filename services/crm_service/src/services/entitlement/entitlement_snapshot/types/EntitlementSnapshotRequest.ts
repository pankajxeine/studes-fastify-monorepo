
export type EntitlementSnapshotRequest = 
{
  tenant_application_id: string
  version: number
  access_mode: string
  reason: string
  valid_until: string
  payload: unknown
  payload_hash: string
  computed_at?: string
}
