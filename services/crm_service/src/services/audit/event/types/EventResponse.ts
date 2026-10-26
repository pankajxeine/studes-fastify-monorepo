
export type EventResponse = 
{
  record_code: string
  event_id: string
  event_seq: number
  occurred_at: string
  actor_type: string
  actor_id?: (string) | null
  actor_ip?: (string) | null
  request_id?: (string) | null
  impersonating_tenant_id?: (string) | null
  tenant_id?: (string) | null
  action: string
  entity_schema: string
  entity_table: string
  entity_id?: (string) | null
  changed_columns?: (string) | null
  old_values?: (unknown) | null
  new_values?: (unknown) | null
  reason?: (string) | null
  prev_hash?: (string) | null
  row_hash: string
}
