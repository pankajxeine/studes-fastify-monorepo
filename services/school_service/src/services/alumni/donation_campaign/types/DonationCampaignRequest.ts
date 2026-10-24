
export type DonationCampaignRequest = 
{
  code: string
  name: string
  description?: (string) | null
  fund_purpose: string
  campus_id?: (string) | null
  goal_amount: string
  starts_on: string
  ends_on: string
  status?: "draft" | "active" | "closed" | "cancelled"
  owner_staff_id?: (string) | null
  is_public?: boolean
}
