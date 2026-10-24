
export type PaymentAllocationRequest = 
{
  payment_id: string
  invoice_id: string
  amount: string
  reversal_of_id?: (string) | null
  allocated_at?: string
  allocated_by?: (string) | null
}
