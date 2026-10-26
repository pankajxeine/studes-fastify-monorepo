
export type IndustryResponse = 
{
  record_code: string
  industry_id: string
  industry_code: string
  name: string
  parent_industry_code?: (string) | null
  requires_kyc: boolean
  is_active: boolean
  sort_order: number
  created_at: string
  updated_at: string
}
