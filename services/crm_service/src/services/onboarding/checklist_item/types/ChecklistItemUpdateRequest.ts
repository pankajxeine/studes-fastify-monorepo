
export type ChecklistItemUpdateRequest = 
{
  request_id: string
  item_code: string
  title: string
  is_mandatory: boolean
  status: string
  completed_by_user_id: (string) | null
  completed_at: (string) | null
  note: (string) | null
}
