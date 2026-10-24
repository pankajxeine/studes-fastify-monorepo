
export type PaymentMethodResponse = 
{
  id: number
  public_id: string
  record_code: string
  payment_method_id: string
  billing_account_id: string
  gateway: string
  gateway_customer_ref: string
  gateway_method_ref: string
  method_type: string
  brand?: (string) | null
  last4?: (string) | null
  exp_month?: (number) | null
  exp_year?: (number) | null
  fingerprint?: (string) | null
  is_default: boolean
  status: string
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
