
export type LeaveTypeRequest = 
{
  leave_type_code?: (string) | null
  name: string
  description?: (string) | null
  is_paid?: boolean
  is_balance_tracked?: boolean
  annual_quota_days?: (number) | null
  carry_forward_max_days?: number
  max_consecutive_days?: (number) | null
  allows_half_day?: boolean
  requires_document_after_days?: (number) | null
  applicable_category?: (string) | null
  applicable_gender_code?: (string) | null
  sort_order?: number
  is_active?: boolean
}
