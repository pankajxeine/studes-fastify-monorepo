
export type RoomBookingUpdateRequest = 
{
  room_id: string
  event_id: (string) | null
  purpose: string
  starts_at: string
  ends_at: string
  booking: (string) | null
  expected_attendees: (number) | null
  booked_by_user_id: string
  status: string
  decided_by_user_id: (string) | null
  decided_at: (string) | null
  decision_note: (string) | null
}
