
export type StaffQualificationUpdateRequest = 
{
  staff_id: string
  qualification_level: string
  degree_name: string
  specialization: (string) | null
  institution: string
  year_completed: (number) | null
  grade_or_score: (string) | null
  is_highest: boolean
  file_id: (string) | null
  verified_by_user_id: (string) | null
  verified_at: (string) | null
}
