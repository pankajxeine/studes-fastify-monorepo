
export type CoursePrerequisiteResponse = 
{
  id: number
  public_id: string
  record_code: string
  course_id: string
  prerequisite_course_id: string
  created_at: string
  created_by?: (string) | null
}
