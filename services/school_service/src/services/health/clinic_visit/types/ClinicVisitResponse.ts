
export type ClinicVisitResponse = 
{
  id: number
  public_id: string
  record_code: string
  clinic_visit_id: string
  person_id: string
  campus_id: string
  clinic_room_id?: (string) | null
  visit_at: string
  complaint: string
  temperature_c?: (number) | null
  pulse_bpm?: (number) | null
  diagnosis?: (string) | null
  treatment?: (string) | null
  medication_given?: (string) | null
  attended_by_staff_id?: (string) | null
  outcome?: (string) | null
  released_at?: (string) | null
  guardian_notified_at?: (string) | null
  follow_up_on?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
