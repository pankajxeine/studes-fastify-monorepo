
export type TimetableEntryRequest = 
{
  course_offering_id: string
  section_id?: (string) | null
  staff_id: string
  room_id?: (string) | null
  period_id: string
  day_of_week: string
  entry_type?: string
  effective_from: string
  effective_to?: (string) | null
  effective?: (string) | null
  notes?: (string) | null
}
