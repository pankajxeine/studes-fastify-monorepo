
export type EventRequest = 
{
  campus_id?: (string) | null
  title: string
  description?: (string) | null
  event_type: string
  starts_at: string
  ends_at: string
  is_all_day?: boolean
  venue_room_id?: (string) | null
  venue_text?: (string) | null
  organizer_staff_id?: (string) | null
  banner_file_id?: (string) | null
  is_public?: boolean
  requires_rsvp?: boolean
  rsvp_deadline_at?: (string) | null
  capacity?: (number) | null
  status?: "scheduled" | "cancelled" | "completed"
  cancelled_reason?: (string) | null
}
