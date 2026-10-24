
export type StopResponse = 
{
  id: number
  public_id: string
  record_code: string
  stop_id: string
  campus_id: string
  code: string
  name: string
  landmark?: (string) | null
  address_line?: (string) | null
  latitude?: (number) | null
  longitude?: (number) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
