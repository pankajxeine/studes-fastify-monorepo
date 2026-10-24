
export type OutpassUpdateRequest = 
{
  outpass_no: string
  student_id: string
  hostel_id: string
  outpass_type: string
  reason: string
  destination: string
  escort_name: (string) | null
  escort_phone: (string) | null
  planned_out_at: string
  expected_return_at: string
  period: (string) | null
  status: "requested" | "approved" | "rejected" | "cancelled" | "checked_out" | "returned"
  requested_at: string
  requested_by_user_id: (string) | null
  has_guardian_consent: boolean
  approved_by_user_id: (string) | null
  approved_at: (string) | null
  rejection_reason: (string) | null
  checked_out_at: (string) | null
  checked_out_by_user_id: (string) | null
  returned_at: (string) | null
  is_late_return: (boolean) | null
}
