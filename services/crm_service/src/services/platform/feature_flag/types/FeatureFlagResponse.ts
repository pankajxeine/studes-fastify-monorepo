
export type FeatureFlagResponse = 
{
  record_code: string
  feature_flag_id: string
  flag_key: string
  description: string
  is_enabled: boolean
  rollout_percent: number
  rules?: (unknown) | null
  created_at: string
  updated_at: string
  updated_by?: (string) | null
}
