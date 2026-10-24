
export type ApplicationGuardianResponse = 
{
  id: number
  public_id: string
  record_code: string
  application_guardian_id: string
  application_id: string
  guardian_id: string
  relationship_type_code: string
  is_primary_contact: boolean
  lives_with_applicant: boolean
  is_fee_payer: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
