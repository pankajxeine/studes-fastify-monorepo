
export type OutboxEventResponse = 
{
  record_code: string
  event_id: string
  aggregate_type: string
  aggregate_id: string
  event_type: string
  event_version: number
  tenant_id?: (string) | null
  payload: unknown
  headers: unknown
  occurred_at: string
  published_at?: (string) | null
  attempts: number
  last_error?: (string) | null
}
