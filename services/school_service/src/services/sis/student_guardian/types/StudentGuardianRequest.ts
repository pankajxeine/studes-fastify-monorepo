
export type StudentGuardianRequest = 
{
  student_id: string
  guardian_id: string
  relationship_type_code: string
  is_primary?: boolean
  can_pickup?: boolean
  receives_communications?: boolean
  lives_with_student?: boolean
  has_legal_custody?: boolean
  is_fee_payer?: boolean
  is_emergency_contact?: boolean
  contact_priority?: number
  valid_from?: string
  valid_to?: (string) | null
  notes?: (string) | null
}
