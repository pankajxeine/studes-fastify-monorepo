
export type PayslipResponse = 
{
  id: number
  public_id: string
  record_code: string
  payslip_id: string
  payroll_run_id: string
  staff_id: string
  staff_salary_assignment_id?: (string) | null
  payslip_no: string
  paid_days: number
  unpaid_leave_days: number
  gross_amount: string
  deduction_amount: string
  net_amount?: (number) | null
  payment_reference?: (string) | null
  file_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
