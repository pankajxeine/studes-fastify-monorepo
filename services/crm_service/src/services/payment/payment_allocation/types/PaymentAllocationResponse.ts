
export type PaymentAllocationResponse = 
{
  id: number
  public_id: string
  record_code: string
  payment_allocation_id: string
  payment_id: string
  invoice_id: string
  amount: string
  reversal_of_id?: (string) | null
  allocated_at: string
  allocated_by?: (string) | null
}
