
export type InquiryFollowUpResponse = 
{
  id: number
  public_id: string
  record_code: string
  inquiry_follow_up_id: string
  inquiry_id: string
  followed_up_by_staff_id?: (string) | null
  channel: string
  followed_up_at: string
  summary: string
  outcome: string
  next_follow_up_on?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
