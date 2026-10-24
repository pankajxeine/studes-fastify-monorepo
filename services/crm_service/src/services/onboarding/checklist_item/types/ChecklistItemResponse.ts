
export type ChecklistItemResponse = 
{
  id: number
  public_id: string
  record_code: string
  request_id: string
  item_code: string
  title: string
  is_mandatory: boolean
  status: string
  completed_by_user_id?: (string) | null
  completed_at?: (string) | null
  note?: (string) | null
}
