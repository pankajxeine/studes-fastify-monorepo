
export type PreviousEducationResponse = 
{
  id: number
  public_id: string
  record_code: string
  previous_education_id: string
  student_id: string
  institution_name: string
  institution_city?: (string) | null
  country_code?: (string) | null
  board_or_university?: (string) | null
  qualification: string
  start_year?: (number) | null
  end_year?: (number) | null
  score_text?: (string) | null
  percentage?: (string) | null
  medium_of_instruction?: (string) | null
  file_id?: (string) | null
  is_verified: boolean
  verified_by_user_id?: (string) | null
  verified_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
