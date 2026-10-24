
export type StudentConcessionResponse = 
{
  id: number
  public_id: string
  record_code: string
  student_concession_id: string
  student_id: string
  academic_year_id: string
  concession_type_code?: (string) | null
  scholarship_id?: (string) | null
  fee_head_code?: (string) | null
  discount_kind: string
  discount_value: number
  max_amount?: (string) | null
  reason: string
  file_id?: (string) | null
  status: string
  requested_by_user_id?: (string) | null
  requested_at: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  rejection_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
