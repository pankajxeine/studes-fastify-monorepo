export type LeaveRequestCreateRequest = 
{
  requester_id: string
  start_date: string
  end_date: string
  reason?: string
  status?: "pending" | "approved" | "rejected" | "cancelled"
}
