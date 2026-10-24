
export type SectionRequest = 
{
  campus_id: string
  academic_year_id: string
  grade_level_id: string
  code: string
  name: string
  class_teacher_staff_id?: (string) | null
  room_id?: (string) | null
  capacity?: number
  is_active?: boolean
}
