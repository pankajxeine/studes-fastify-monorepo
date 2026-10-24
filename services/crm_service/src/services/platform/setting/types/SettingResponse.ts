
export type SettingResponse = 
{
  id: number
  public_id: string
  record_code: string
  setting_key: string
  value: unknown
  description?: (string) | null
  is_sensitive: boolean
  created_at: string
  updated_at: string
  updated_by?: (string) | null
}
