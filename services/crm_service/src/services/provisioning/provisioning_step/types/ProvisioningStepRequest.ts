
export type ProvisioningStepRequest = 
{
  job_id: string
  step_no: number
  step_code: string
  compensation_step_code?: (string) | null
  status?: string
  attempts?: number
  started_at?: (string) | null
  finished_at?: (string) | null
  output?: (unknown) | null
  error?: (string) | null
}
