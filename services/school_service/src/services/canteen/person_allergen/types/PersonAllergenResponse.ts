
export type PersonAllergenResponse = 
{
  id: number
  public_id: string
  record_code: string
  person_allergen_id: string
  person_id: string
  allergen_code: string
  medical_profile_id?: (string) | null
  severity: "mild" | "moderate" | "severe" | "anaphylaxis"
  reaction?: (string) | null
  action_plan?: (string) | null
  is_active: boolean
  verified_on?: (string) | null
  verified_by_staff_id?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
