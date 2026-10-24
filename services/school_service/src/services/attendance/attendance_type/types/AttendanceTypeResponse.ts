
export type AttendanceTypeResponse = 
{
  id: number
  public_id: string
  record_code: string
  attendance_type_code?: (string) | null
  name: string
  description?: (string) | null
  present_weight: number
  counts_toward_total: boolean
  is_excused: boolean
  applies_to_students: boolean
  applies_to_staff: boolean
  color_hex?: (string) | null
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
