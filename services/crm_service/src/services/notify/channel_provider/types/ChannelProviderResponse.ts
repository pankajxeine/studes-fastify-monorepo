
export type ChannelProviderResponse = 
{
  id: number
  public_id: string
  record_code: string
  provider_code: string
  channel: string
  config: unknown
  secret_ref?: (string) | null
  priority: number
  is_active: boolean
  created_at: string
  updated_at: string
}
