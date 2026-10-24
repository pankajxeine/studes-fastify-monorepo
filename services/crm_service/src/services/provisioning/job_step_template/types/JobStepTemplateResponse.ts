
export type JobStepTemplateResponse = 
{
  id: number
  public_id: string
  record_code: string
  job_type: string
  step_no: number
  step_code: string
  compensation_step_code?: (string) | null
  timeout_seconds: number
}
