
export type StudentResponse = 
{
  id: number
  public_id: string
  record_code: string
  student_id: string
  person_id: string
  campus_id: string
  application_id?: (string) | null
  house_id?: (string) | null
  admission_no: string
  admitted_on: string
  cohort_year: number
  status: string
  left_on?: (string) | null
  leaving_reason?: (string) | null
  graduated_on?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  deleted_at?: (string) | null
}
