
export type MedicalProfileResponse = 
{
  id: number
  public_id: string
  record_code: string
  medical_profile_id: string
  person_id: string
  blood_group?: (string) | null
  height_cm?: (number) | null
  weight_kg?: (number) | null
  allergies?: (string) | null
  has_severe_allergy: boolean
  chronic_conditions?: (string) | null
  medications?: (string) | null
  dietary_restrictions?: (string) | null
  disability_notes?: (string) | null
  emergency_care_plan?: (string) | null
  primary_physician?: (string) | null
  physician_phone?: (string) | null
  insurance_provider?: (string) | null
  insurance_policy_no?: (string) | null
  last_reviewed_on?: (string) | null
  reviewed_by_staff_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
