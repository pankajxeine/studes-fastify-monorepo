
export type DunningRunRequest = 
{
  invoice_id: string
  step_no: number
  action: string
  executed_at?: string
  result?: (string) | null
}
