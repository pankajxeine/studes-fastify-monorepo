export type AssignmentCreateRequest = 
{
  offering_id: string
  title: string
  description?: string
  due_date?: string
  status?: "draft" | "published" | "archived"
}
