
export type ReconciliationBatchRequest = 
{
  gateway: string
  settlement_ref: string
  settlement_date: string
  currency_code: string
  gross_amount: string
  fee_amount?: string
  net_amount: string
  status?: string
  closed_by_user_id?: (string) | null
  closed_at?: (string) | null
}
