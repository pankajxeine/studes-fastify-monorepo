
export type PaymentAllocationRequest = 
{
  payment_id: string
  invoice_id: string
  amount: string
  allocated_at?: string
  allocated_by_user_id?: (string) | null
  reversed_at?: (string) | null
  reversed_by_user_id?: (string) | null
  reversal_reason?: (string) | null
}
