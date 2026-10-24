
export type FeatureFlagResponse = 
{
  id: number
  public_id: string
  record_code: string
  flag_key: string
  description: string
  is_enabled: boolean
  rollout_percent: number
  rules?: (unknown) | null
  created_at: string
  updated_at: string
  updated_by?: (string) | null
}
