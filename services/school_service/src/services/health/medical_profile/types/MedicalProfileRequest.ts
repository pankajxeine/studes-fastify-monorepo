
export type MedicalProfileRequest = 
{
  person_id: string
  blood_group?: (string) | null
  height_cm?: (number) | null
  weight_kg?: (number) | null
  allergies?: (string) | null
  has_severe_allergy?: boolean
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
}
