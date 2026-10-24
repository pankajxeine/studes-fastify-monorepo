
export type EventParticipantUpdateRequest = 
{
  event_id: string
  person_id: string
  participant_role: string
  rsvp_status: string
  responded_at: (string) | null
  guest_count: number
  checked_in_at: (string) | null
  notes: (string) | null
}
