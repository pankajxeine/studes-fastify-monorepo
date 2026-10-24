
export type PayrollRunUpdateRequest = 
{
  campus_id: string
  run_code: string
  period_start_on: string
  period_end_on: string
  pay_date: string
  working_days: number
  status: string
  staff_count: number
  gross_amount: string
  deduction_amount: string
  net_amount: (number) | null
  processed_by_user_id: (string) | null
  processed_at: (string) | null
  approved_by_user_id: (string) | null
  approved_at: (string) | null
  paid_at: (string) | null
  cancelled_at: (string) | null
  notes: (string) | null
}
