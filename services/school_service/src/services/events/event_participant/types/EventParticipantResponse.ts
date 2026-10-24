
export type EventParticipantResponse = 
{
  id: number
  public_id: string
  record_code: string
  event_participant_id: string
  event_id: string
  person_id: string
  participant_role: string
  rsvp_status: string
  responded_at?: (string) | null
  guest_count: number
  checked_in_at?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
