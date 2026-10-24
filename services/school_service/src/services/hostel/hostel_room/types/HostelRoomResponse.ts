
export type HostelRoomResponse = 
{
  id: number
  public_id: string
  record_code: string
  hostel_room_id: string
  hostel_id: string
  room_no: string
  floor_no: number
  room_type: string
  bed_count: number
  has_attached_bath: boolean
  has_air_conditioning: boolean
  is_active: boolean
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
