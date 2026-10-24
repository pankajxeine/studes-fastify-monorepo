
export type HouseUpdateRequest = 
{
  campus_id: string
  code: string
  name: string
  color_hex: (string) | null
  motto: (string) | null
  house_master_staff_id: (string) | null
  is_active: boolean
}
