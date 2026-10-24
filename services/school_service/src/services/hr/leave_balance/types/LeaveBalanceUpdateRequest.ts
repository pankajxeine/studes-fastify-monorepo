
export type LeaveBalanceUpdateRequest = 
{
  staff_id: string
  leave_type_code: string
  period_start_on: string
  period_end_on: string
  opening_days: number
  accrued_days: number
  adjusted_days: number
  used_days: number
  available_days: (number) | null
  period: (string) | null
}
