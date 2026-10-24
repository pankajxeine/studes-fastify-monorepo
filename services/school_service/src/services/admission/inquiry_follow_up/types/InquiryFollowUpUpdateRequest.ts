
export type InquiryFollowUpUpdateRequest = 
{
  inquiry_id: string
  followed_up_by_staff_id: (string) | null
  channel: string
  followed_up_at: string
  summary: string
  outcome: string
  next_follow_up_on: (string) | null
}
