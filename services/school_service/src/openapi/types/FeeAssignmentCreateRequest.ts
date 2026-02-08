export type FeeAssignmentCreateRequest = 
{
  student_id: string
  fee_structure_id: string
  status?: "pending" | "paid" | "overdue" | "cancelled"
}
