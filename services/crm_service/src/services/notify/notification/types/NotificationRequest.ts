
export type NotificationRequest = 
{
  template_version_id: string
  locale: string
  channel: string
  recipient_address: string
  tenant_id?: (string) | null
  related_type?: (string) | null
  related_id?: (string) | null
  payload: unknown
  status?: string
  priority?: number
  idempotency_key: string
  scheduled_at?: string
  sent_at?: (string) | null
  delivered_at?: (string) | null
}
