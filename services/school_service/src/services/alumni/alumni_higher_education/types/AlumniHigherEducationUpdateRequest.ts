
export type AlumniHigherEducationUpdateRequest = 
{
  alumnus_id: string
  institution_name: string
  degree: string
  field_of_study: (string) | null
  study_mode: string
  start_year: number
  end_year: (number) | null
  status: string
  grade_obtained: (string) | null
  city: (string) | null
  country_code: (string) | null
}
