
export type GatePassRequest = 
{
  pass_no: string
  student_id: string
  campus_id: string
  pass_type: string
  reason: string
  status?: "requested" | "approved" | "rejected" | "exited" | "returned" | "cancelled" | "expired"
  out_from: string
  valid_until: string
  pass_window?: (string) | null
  is_return_expected?: boolean
  pickup_person_id?: (string) | null
  requested_by_user_id?: (string) | null
  requested_at?: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  rejection_reason?: (string) | null
  verification_code: string
  guardian_notified_at?: (string) | null
  exited_at?: (string) | null
  exit_recorded_by_user_id?: (string) | null
  pickup_id_verified?: boolean
  returned_at?: (string) | null
  return_recorded_by_user_id?: (string) | null
  cancelled_reason?: (string) | null
  notes?: (string) | null
}
