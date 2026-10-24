
export type PersonAllergenUpdateRequest = 
{
  person_id: string
  allergen_code: string
  medical_profile_id: (string) | null
  severity: "mild" | "moderate" | "severe" | "anaphylaxis"
  reaction: (string) | null
  action_plan: (string) | null
  is_active: boolean
  verified_on: (string) | null
  verified_by_staff_id: (string) | null
  notes: (string) | null
}
