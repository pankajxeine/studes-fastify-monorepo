
export type RoomBookingResponse = 
{
  id: number
  public_id: string
  record_code: string
  room_booking_id: string
  room_id: string
  event_id?: (string) | null
  purpose: string
  starts_at: string
  ends_at: string
  booking?: (string) | null
  expected_attendees?: (number) | null
  booked_by_user_id: string
  status: string
  decided_by_user_id?: (string) | null
  decided_at?: (string) | null
  decision_note?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
