
export type PreviousEducationUpdateRequest = 
{
  student_id: string
  institution_name: string
  institution_city: (string) | null
  country_code: (string) | null
  board_or_university: (string) | null
  qualification: string
  start_year: (number) | null
  end_year: (number) | null
  score_text: (string) | null
  percentage: (string) | null
  medium_of_instruction: (string) | null
  file_id: (string) | null
  is_verified: boolean
  verified_by_user_id: (string) | null
  verified_at: (string) | null
}
