
export type LeaveBalanceResponse = 
{
  id: number
  public_id: string
  record_code: string
  leave_balance_id: string
  staff_id: string
  leave_type_code: string
  period_start_on: string
  period_end_on: string
  opening_days: number
  accrued_days: number
  adjusted_days: number
  used_days: number
  available_days?: (number) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  period?: (string) | null
}
