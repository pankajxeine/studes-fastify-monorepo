
export type DunningStepResponse = 
{
  record_code: string
  dunning_step_id: string
  dunning_policy_id: string
  step_no: number
  days_after_due: number
  action: string
  template_code?: (string) | null
  grace_days?: (number) | null
}
