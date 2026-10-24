
export type RefundUpdateRequest = 
{
  refund_no: string
  payment_id: string
  invoice_id: (string) | null
  amount: string
  reason: string
  status: string
  refund_method: string
  reference_no: (string) | null
  requested_by_user_id: (string) | null
  requested_at: string
  approved_by_user_id: (string) | null
  approved_at: (string) | null
  processed_by_user_id: (string) | null
  processed_at: (string) | null
  rejection_reason: (string) | null
}
