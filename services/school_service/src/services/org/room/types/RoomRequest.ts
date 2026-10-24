
export type RoomRequest = 
{
  building_id: string
  campus_id: string
  room_type_code: string
  code: string
  name: string
  floor_no?: number
  capacity?: (number) | null
  area_sqm?: (number) | null
  is_bookable?: boolean
  has_projector?: boolean
  is_accessible?: boolean
  is_active?: boolean
  notes?: (string) | null
}
