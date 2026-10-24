
export type AlumnusUpdateRequest = 
{
  person_id: string
  student_id: (string) | null
  program_id: (string) | null
  campus_id: (string) | null
  alumni_no: string
  graduation_year: number
  graduated_on: (string) | null
  degree_title: (string) | null
  final_cgpa: (number) | null
  honours: (string) | null
  current_city: (string) | null
  current_country_code: (string) | null
  industry: (string) | null
  linkedin_url: (string) | null
  bio: (string) | null
  membership_status: string
  is_directory_visible: boolean
  can_contact: boolean
  is_mentor_available: boolean
  max_mentees: number
  verified_at: (string) | null
  verified_by_user_id: (string) | null
}
