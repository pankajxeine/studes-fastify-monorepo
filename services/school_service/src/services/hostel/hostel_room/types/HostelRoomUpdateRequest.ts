
export type HostelRoomUpdateRequest = 
{
  hostel_id: string
  room_no: string
  floor_no: number
  room_type: string
  bed_count: number
  has_attached_bath: boolean
  has_air_conditioning: boolean
  is_active: boolean
  notes: (string) | null
}
