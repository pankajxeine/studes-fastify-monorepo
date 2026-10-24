
export type PtmSlotResponse = 
{
  id: number
  public_id: string
  record_code: string
  ptm_slot_id: string
  event_id: string
  staff_id: string
  room_id?: (string) | null
  starts_at: string
  ends_at: string
  slot?: (string) | null
  meeting_mode: string
  student_id?: (string) | null
  booked_by_guardian_id?: (string) | null
  booked_at?: (string) | null
  status: "available" | "booked" | "completed" | "cancelled"
  meeting_notes?: (string) | null
  cancelled_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
