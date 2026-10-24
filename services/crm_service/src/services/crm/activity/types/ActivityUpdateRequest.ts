
export type ActivityUpdateRequest = 
{
  activity_type: string
  subject: string
  body: (string) | null
  related_type: string
  related_id: string
  owner_user_id: string
  due_at: (string) | null
  completed_at: (string) | null
}
