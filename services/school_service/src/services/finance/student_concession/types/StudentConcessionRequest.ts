
export type StudentConcessionRequest = 
{
  student_id: string
  academic_year_id: string
  concession_type_code?: (string) | null
  scholarship_id?: (string) | null
  fee_head_code?: (string) | null
  discount_kind?: string
  discount_value: number
  max_amount?: (string) | null
  reason: string
  file_id?: (string) | null
  status?: string
  requested_by_user_id?: (string) | null
  requested_at?: string
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  rejection_reason?: (string) | null
}
