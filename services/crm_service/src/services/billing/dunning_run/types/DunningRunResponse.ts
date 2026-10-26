
export type DunningRunResponse = 
{
  record_code: string
  dunning_run_id: string
  invoice_id: string
  step_no: number
  action: string
  executed_at: string
  result?: (string) | null
}
