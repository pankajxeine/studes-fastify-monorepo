
export type OfferingInstructorUpdateRequest = 
{
  course_offering_id: string
  staff_id: string
  instructor_role: string
  is_primary: boolean
  valid_from: string
  valid_to: (string) | null
  validity: (string) | null
  load_percentage: string
}
