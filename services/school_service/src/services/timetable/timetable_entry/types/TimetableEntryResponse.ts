
export type TimetableEntryResponse = 
{
  id: number
  public_id: string
  record_code: string
  timetable_entry_id: string
  course_offering_id: string
  section_id?: (string) | null
  staff_id: string
  room_id?: (string) | null
  period_id: string
  day_of_week: string
  entry_type: string
  effective_from: string
  effective_to?: (string) | null
  effective?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
