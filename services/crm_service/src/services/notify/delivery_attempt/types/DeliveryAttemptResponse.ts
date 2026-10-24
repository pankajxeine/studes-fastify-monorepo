
export type DeliveryAttemptResponse = 
{
  id: number
  public_id: string
  record_code: string
  notification_id: string
  attempt_no: number
  provider_code: string
  provider_message_id?: (string) | null
  status: string
  error?: (string) | null
  attempted_at: string
}
