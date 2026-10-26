
export type JobStepTemplateResponse = 
{
  record_code: string
  job_step_template_id: string
  job_type: string
  step_no: number
  step_code: string
  compensation_step_code?: (string) | null
  timeout_seconds: number
}
