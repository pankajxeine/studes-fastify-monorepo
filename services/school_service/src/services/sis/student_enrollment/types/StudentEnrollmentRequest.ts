
export type StudentEnrollmentRequest = 
{
  student_id: string
  academic_year_id: string
  term_id?: (string) | null
  campus_id: string
  program_id: string
  grade_level_id: string
  section_id?: (string) | null
  roll_no?: (number) | null
  status?: string
  enrolled_on: string
  exited_on?: (string) | null
  enrollment_period?: (string) | null
  promoted_from_enrollment_id?: (string) | null
  is_repeating?: boolean
  exit_reason?: (string) | null
  remarks?: (string) | null
}
