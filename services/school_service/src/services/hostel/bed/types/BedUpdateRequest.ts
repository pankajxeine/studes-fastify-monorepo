
export type BedUpdateRequest = 
{
  hostel_room_id: string
  bed_code: string
  status: string
  has_study_desk: boolean
  has_locker: boolean
  notes: (string) | null
}
