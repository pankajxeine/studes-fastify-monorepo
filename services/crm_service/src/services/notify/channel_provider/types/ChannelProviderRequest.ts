
export type ChannelProviderRequest = 
{
  provider_code: string
  channel: string
  config?: unknown
  secret_ref?: (string) | null
  priority?: number
  is_active?: boolean
}
