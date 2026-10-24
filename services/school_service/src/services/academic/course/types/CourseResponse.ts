
export type CourseResponse = 
{
  id: number
  public_id: string
  record_code: string
  course_id: string
  department_id: string
  code: string
  name: string
  description?: (string) | null
  course_type: string
  credits?: (number) | null
  lecture_hours_per_week?: (number) | null
  lab_hours_per_week?: (number) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  deleted_at?: (string) | null
}
