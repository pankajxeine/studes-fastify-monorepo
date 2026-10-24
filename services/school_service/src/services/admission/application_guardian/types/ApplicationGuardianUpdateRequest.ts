
export type ApplicationGuardianUpdateRequest = 
{
  application_id: string
  guardian_id: string
  relationship_type_code: string
  is_primary_contact: boolean
  lives_with_applicant: boolean
  is_fee_payer: boolean
}
