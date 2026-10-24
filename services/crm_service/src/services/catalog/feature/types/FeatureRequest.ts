
export type FeatureRequest = 
{
  module_id: string
  feature_code: string
  name: string
  description?: (string) | null
  kind: string
  unit?: (string) | null
  default_value?: (unknown) | null
  reset_period?: string
  enforcement?: string
  overage_allowed?: boolean
  is_active?: boolean
  sort_order?: number
}
