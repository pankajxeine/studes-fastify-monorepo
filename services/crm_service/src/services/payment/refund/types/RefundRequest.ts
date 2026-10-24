
export type RefundRequest = 
{
  payment_id: string
  amount: string
  reason: string
  status?: string
  requested_by_user_id: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  gateway_refund_ref?: (string) | null
  processed_at?: (string) | null
  failure_message?: (string) | null
}
