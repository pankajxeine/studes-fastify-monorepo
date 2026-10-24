
export type StaffSalaryAssignmentResponse = 
{
  id: number
  public_id: string
  record_code: string
  staff_salary_assignment_id: string
  staff_id: string
  salary_structure_id: string
  basic_amount: string
  effective_from: string
  effective_to?: (string) | null
  revision_reason?: (string) | null
  approved_by_user_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  validity?: (string) | null
}
