
export type DeliveryAttemptResponse = 
{
  record_code: string
  delivery_attempt_id: string
  notification_id: string
  attempt_no: number
  provider_code: string
  provider_message_id?: (string) | null
  status: string
  error?: (string) | null
  attempted_at: string
}
