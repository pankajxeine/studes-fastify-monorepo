
export type OfferingInstructorResponse = 
{
  id: number
  public_id: string
  record_code: string
  offering_instructor_id: string
  course_offering_id: string
  staff_id: string
  instructor_role: string
  is_primary: boolean
  valid_from: string
  valid_to?: (string) | null
  validity?: (string) | null
  load_percentage: string
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
