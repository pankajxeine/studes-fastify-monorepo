
export type EventResponse = 
{
  id: number
  public_id: string
  record_code: string
  event_id: string
  campus_id?: (string) | null
  title: string
  description?: (string) | null
  event_type: string
  starts_at: string
  ends_at: string
  is_all_day: boolean
  venue_room_id?: (string) | null
  venue_text?: (string) | null
  organizer_staff_id?: (string) | null
  banner_file_id?: (string) | null
  is_public: boolean
  requires_rsvp: boolean
  rsvp_deadline_at?: (string) | null
  capacity?: (number) | null
  status: "scheduled" | "cancelled" | "completed"
  cancelled_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
