
export type StudentTransferResponse = 
{
  id: number
  public_id: string
  record_code: string
  student_transfer_id: string
  student_id: string
  direction: "incoming" | "outgoing"
  status: string
  transfer_date: string
  other_school_name: string
  other_school_city?: (string) | null
  other_school_board?: (string) | null
  last_grade_completed?: (string) | null
  reason?: (string) | null
  incoming_tc_no?: (string) | null
  issued_certificate_id?: (string) | null
  requested_by_person_id?: (string) | null
  decided_by_user_id?: (string) | null
  decided_at?: (string) | null
  remarks?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
