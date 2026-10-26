
export type AccessReviewResponse = 
{
  record_code: string
  access_review_id: string
  name: string
  period_label: string
  status: string
  due_at: string
  closed_at?: (string) | null
  created_at: string
  created_by?: (string) | null
}
