
export type PaymentResponse = 
{
  id: number
  public_id: string
  record_code: string
  payment_id: string
  payment_number: string
  billing_account_id: string
  payment_method_id?: (string) | null
  gateway: string
  gateway_payment_ref?: (string) | null
  idempotency_key: string
  method_type: string
  currency_code: string
  amount: string
  fee_amount: string
  amount_refunded: string
  status: string
  received_at: string
  captured_at?: (string) | null
  failure_code?: (string) | null
  failure_message?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
