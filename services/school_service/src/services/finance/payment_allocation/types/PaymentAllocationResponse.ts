
export type PaymentAllocationResponse = 
{
  id: number
  public_id: string
  record_code: string
  payment_allocation_id: string
  payment_id: string
  invoice_id: string
  amount: string
  allocated_at: string
  allocated_by_user_id?: (string) | null
  reversed_at?: (string) | null
  reversed_by_user_id?: (string) | null
  reversal_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
