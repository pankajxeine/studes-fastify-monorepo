
export type AccessReviewItemResponse = 
{
  id: number
  public_id: string
  record_code: string
  access_review_item_id: string
  access_review_id: string
  user_role_id: string
  reviewer_user_id: string
  decision?: (string) | null
  decided_at?: (string) | null
  comment?: (string) | null
}
