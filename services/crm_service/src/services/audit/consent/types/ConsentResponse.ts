
export type ConsentResponse = 
{
  id: number
  public_id: string
  record_code: string
  consent_id: string
  subject_type: string
  subject_id: string
  purpose: string
  granted: boolean
  source: string
  policy_version: string
  evidence_ref?: (string) | null
  captured_at: string
  withdrawn_at?: (string) | null
}
