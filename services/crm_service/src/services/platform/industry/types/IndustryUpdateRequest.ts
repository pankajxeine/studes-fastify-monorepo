
export type IndustryUpdateRequest = 
{
  industry_code: string
  name: string
  parent_industry_code: (string) | null
  requires_kyc: boolean
  is_active: boolean
  sort_order: number
}
