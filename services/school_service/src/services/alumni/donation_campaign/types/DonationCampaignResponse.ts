
export type DonationCampaignResponse = 
{
  id: number
  public_id: string
  record_code: string
  donation_campaign_id: string
  code: string
  name: string
  description?: (string) | null
  fund_purpose: string
  campus_id?: (string) | null
  goal_amount: string
  starts_on: string
  ends_on: string
  status: "draft" | "active" | "closed" | "cancelled"
  owner_staff_id?: (string) | null
  is_public: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
