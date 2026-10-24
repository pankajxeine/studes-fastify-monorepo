
export type HealthCheckupUpdateRequest = 
{
  person_id: string
  campus_id: (string) | null
  checkup_date: string
  checkup_type: string
  height_cm: (number) | null
  weight_kg: (number) | null
  bmi: (number) | null
  vision_left: (string) | null
  vision_right: (string) | null
  hearing_notes: (string) | null
  dental_notes: (string) | null
  findings: (string) | null
  recommendations: (string) | null
  is_referral_needed: boolean
  checked_by_staff_id: (string) | null
  examiner_name: (string) | null
  file_id: (string) | null
}
