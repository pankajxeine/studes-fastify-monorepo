
export type SectionResponse = 
{
  id: number
  public_id: string
  record_code: string
  section_id: string
  campus_id: string
  academic_year_id: string
  grade_level_id: string
  code: string
  name: string
  class_teacher_staff_id?: (string) | null
  room_id?: (string) | null
  capacity: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
