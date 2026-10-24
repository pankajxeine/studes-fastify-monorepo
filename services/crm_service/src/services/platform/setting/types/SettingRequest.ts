
export type SettingRequest = 
{
  setting_key: string
  value: unknown
  description?: (string) | null
  is_sensitive?: boolean
}
