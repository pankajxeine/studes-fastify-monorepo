
export type CourseUpdateRequest = 
{
  department_id: string
  code: string
  name: string
  description: (string) | null
  course_type: string
  credits: (number) | null
  lecture_hours_per_week: (number) | null
  lab_hours_per_week: (number) | null
  is_active: boolean
}
