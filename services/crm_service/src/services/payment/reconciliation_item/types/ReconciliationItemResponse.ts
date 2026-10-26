
export type ReconciliationItemResponse = 
{
  record_code: string
  reconciliation_item_id: string
  reconciliation_batch_id: string
  gateway_payment_ref: string
  payment_id?: (string) | null
  amount: string
  fee_amount: string
  status: string
  note?: (string) | null
}
