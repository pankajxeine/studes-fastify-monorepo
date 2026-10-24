
export type FeatureFlagRequest = 
{
  flag_key: string
  description: string
  is_enabled?: boolean
  rollout_percent?: number
  rules?: (unknown) | null
}
