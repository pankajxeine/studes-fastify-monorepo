
export type SettingUpdateRequest = 
{
  setting_key: string
  value: unknown
  description: (string) | null
  is_sensitive: boolean
}
