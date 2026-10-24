
export type AccessReviewItemUpdateRequest = 
{
  access_review_id: string
  user_role_id: string
  reviewer_user_id: string
  decision: (string) | null
  decided_at: (string) | null
  comment: (string) | null
}
