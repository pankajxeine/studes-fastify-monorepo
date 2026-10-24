
export type MeritRecordResponse = 
{
  id: number
  public_id: string
  record_code: string
  merit_record_id: string
  student_id: string
  academic_year_id: string
  awarded_by_staff_id: string
  awarded_on: string
  points: number
  category: string
  reason: string
  incident_id?: (string) | null
  is_visible_to_guardian: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
