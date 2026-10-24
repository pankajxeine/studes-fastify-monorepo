
export type MeritRecordUpdateRequest = 
{
  student_id: string
  academic_year_id: string
  awarded_by_staff_id: string
  awarded_on: string
  points: number
  category: string
  reason: string
  incident_id: (string) | null
  is_visible_to_guardian: boolean
}
