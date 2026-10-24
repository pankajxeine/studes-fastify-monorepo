
export type BedResponse = 
{
  id: number
  public_id: string
  record_code: string
  bed_id: string
  hostel_room_id: string
  bed_code: string
  status: string
  has_study_desk: boolean
  has_locker: boolean
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
