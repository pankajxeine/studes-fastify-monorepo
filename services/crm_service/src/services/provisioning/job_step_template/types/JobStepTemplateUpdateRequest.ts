
export type JobStepTemplateUpdateRequest = 
{
  job_type: string
  step_no: number
  step_code: string
  compensation_step_code: (string) | null
  timeout_seconds: number
}
