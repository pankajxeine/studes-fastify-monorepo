
export type PersonResponse = 
{
  id: number
  public_id: string
  record_code: string
  person_id: string
  honorific?: (string) | null
  first_name: string
  middle_name?: (string) | null
  last_name: string
  full_name?: (string) | null
  preferred_name?: (string) | null
  date_of_birth?: (string) | null
  gender_code?: (string) | null
  nationality?: (string) | null
  national_id?: (string) | null
  passport_no?: (string) | null
  primary_email?: (string) | null
  primary_phone?: (string) | null
  first_language?: (string) | null
  photo_file_id?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  deleted_at?: (string) | null
}
