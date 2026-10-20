
export type PackageFeaturesRequest = 
{
  id?: number
  package_id?: number
  feature_id?: number
  feature_type?: string
  short_description?: string
  tags?: string
  additional_price?: number
  additional_cost_price?: number
  primary_price?: number
  primary_cost_price?: number
  trial_period_days?: number
  video_description?: string
  full_description?: string
  images?: string
  videos?: string
  created_by?: number
  updated_by?: number
}
