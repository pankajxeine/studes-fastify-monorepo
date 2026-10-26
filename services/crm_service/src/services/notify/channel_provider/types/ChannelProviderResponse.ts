
export type ChannelProviderResponse = 
{
  record_code: string
  channel_provider_id: string
  provider_code: string
  channel: string
  config: unknown
  secret_ref?: (string) | null
  priority: number
  is_active: boolean
  created_at: string
  updated_at: string
}
