
export type LifecycleEventRequest = 
{
  tenant_id: string
  tenant_application_id?: (string) | null
  from_status?: (string) | null
  to_status: string
  reason?: (string) | null
  actor_user_id?: (string) | null
  occurred_at?: string
}
