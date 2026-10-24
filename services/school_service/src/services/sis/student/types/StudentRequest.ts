
export type StudentRequest = 
{
  person_id: string
  campus_id: string
  application_id?: (string) | null
  house_id?: (string) | null
  admission_no: string
  admitted_on: string
  cohort_year: number
  status?: string
  left_on?: (string) | null
  leaving_reason?: (string) | null
  graduated_on?: (string) | null
  notes?: (string) | null
}
