
export type StaffSalaryAssignmentRequest = 
{
  staff_id: string
  salary_structure_id: string
  basic_amount: string
  effective_from: string
  effective_to?: (string) | null
  revision_reason?: (string) | null
  approved_by_user_id?: (string) | null
  validity?: (string) | null
}
