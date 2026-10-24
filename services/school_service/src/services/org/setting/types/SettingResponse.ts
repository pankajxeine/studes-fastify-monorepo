
export type SettingResponse = 
{
  id: number
  public_id: string
  record_code: string
  setting_id: string
  campus_id?: (string) | null
  module: string
  setting_key: string
  value: unknown
  value_type: string
  description?: (string) | null
  is_editable: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
