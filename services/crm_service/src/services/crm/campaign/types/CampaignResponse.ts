
export type CampaignResponse = 
{
  record_code: string
  campaign_id: string
  campaign_code: string
  name: string
  channel: string
  application_id?: (string) | null
  start_date: string
  end_date?: (string) | null
  budget_amount?: (string) | null
  currency_code?: (string) | null
  owner_user_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
