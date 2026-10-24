
export type PaymentMethodUpdateRequest = 
{
  billing_account_id: string
  gateway: string
  gateway_customer_ref: string
  gateway_method_ref: string
  method_type: string
  brand: (string) | null
  last4: (string) | null
  exp_month: (number) | null
  exp_year: (number) | null
  fingerprint: (string) | null
  is_default: boolean
  status: string
}
