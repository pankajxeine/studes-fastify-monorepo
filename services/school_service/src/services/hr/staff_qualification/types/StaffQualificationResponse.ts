
export type StaffQualificationResponse = 
{
  id: number
  public_id: string
  record_code: string
  staff_qualification_id: string
  staff_id: string
  qualification_level: string
  degree_name: string
  specialization?: (string) | null
  institution: string
  year_completed?: (number) | null
  grade_or_score?: (string) | null
  is_highest: boolean
  file_id?: (string) | null
  verified_by_user_id?: (string) | null
  verified_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
