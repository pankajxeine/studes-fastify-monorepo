
export type SettingResponse = 
{
  record_code: string
  setting_id: string
  setting_key: string
  value: unknown
  description?: (string) | null
  is_sensitive: boolean
  created_at: string
  updated_at: string
  updated_by?: (string) | null
}
