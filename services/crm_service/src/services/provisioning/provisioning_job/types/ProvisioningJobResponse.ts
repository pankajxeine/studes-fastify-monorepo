
export type ProvisioningJobResponse = 
{
  id: number
  public_id: string
  record_code: string
  job_id: string
  tenant_application_id: string
  job_type: string
  status: string
  idempotency_key: string
  payload: unknown
  result?: (unknown) | null
  attempts: number
  max_attempts: number
  run_after: string
  locked_by?: (string) | null
  locked_until?: (string) | null
  started_at?: (string) | null
  finished_at?: (string) | null
  last_error?: (string) | null
  requested_by_user_id?: (string) | null
  created_at: string
  updated_at: string
}
