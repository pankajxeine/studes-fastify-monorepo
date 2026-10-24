
export type AlumniHigherEducationResponse = 
{
  id: number
  public_id: string
  record_code: string
  alumni_higher_education_id: string
  alumnus_id: string
  institution_name: string
  degree: string
  field_of_study?: (string) | null
  study_mode: string
  start_year: number
  end_year?: (number) | null
  status: string
  grade_obtained?: (string) | null
  city?: (string) | null
  country_code?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
