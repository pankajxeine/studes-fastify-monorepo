
export type HouseResponse = 
{
  id: number
  public_id: string
  record_code: string
  house_id: string
  campus_id: string
  code: string
  name: string
  color_hex?: (string) | null
  motto?: (string) | null
  house_master_staff_id?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
