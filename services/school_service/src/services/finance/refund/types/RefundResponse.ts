
export type RefundResponse = 
{
  id: number
  public_id: string
  record_code: string
  refund_id: string
  refund_no: string
  payment_id: string
  invoice_id?: (string) | null
  amount: string
  reason: string
  status: string
  refund_method: string
  reference_no?: (string) | null
  requested_by_user_id?: (string) | null
  requested_at: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  processed_by_user_id?: (string) | null
  processed_at?: (string) | null
  rejection_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
