
export type PayslipUpdateRequest = 
{
  payroll_run_id: string
  staff_id: string
  staff_salary_assignment_id: (string) | null
  payslip_no: string
  paid_days: number
  unpaid_leave_days: number
  gross_amount: string
  deduction_amount: string
  net_amount: (number) | null
  payment_reference: (string) | null
  file_id: (string) | null
}
