export type HostelAllocationCreateRequest = 
{
  student_id: string
  room_id: string
  status?: "active" | "inactive"
}
