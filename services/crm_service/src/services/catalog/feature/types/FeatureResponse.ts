
export type FeatureResponse = 
{
  id: number
  public_id: string
  record_code: string
  feature_id: string
  module_id: string
  feature_code: string
  name: string
  description?: (string) | null
  kind: string
  unit?: (string) | null
  default_value?: (unknown) | null
  reset_period: string
  enforcement: string
  overage_allowed: boolean
  is_active: boolean
  sort_order: number
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
