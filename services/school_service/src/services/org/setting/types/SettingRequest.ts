
export type SettingRequest = 
{
  campus_id?: (string) | null
  module: string
  setting_key: string
  value: unknown
  value_type: string
  description?: (string) | null
  is_editable?: boolean
}
