
export type MentorshipUpdateRequest = 
{
  mentor_alumnus_id: string
  mentee_student_id: string
  status: string
  focus_area: string
  goals: (string) | null
  meeting_frequency: string
  requested_by_user_id: (string) | null
  requested_at: string
  responded_at: (string) | null
  started_on: (string) | null
  ended_on: (string) | null
  decline_reason: (string) | null
  mentee_rating: (number) | null
  mentee_feedback: (string) | null
  mentor_notes: (string) | null
}
