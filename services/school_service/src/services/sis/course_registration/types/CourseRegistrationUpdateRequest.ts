
export type CourseRegistrationUpdateRequest = 
{
  student_enrollment_id: string
  student_id: string
  course_offering_id: string
  status: string
  registered_at: string
  credits_attempted: (number) | null
  is_audit: boolean
  dropped_at: (string) | null
  drop_reason: (string) | null
  completed_on: (string) | null
  approved_by_user_id: (string) | null
  remarks: (string) | null
}
