
export type StaffUpdateRequest = 
{
  person_id: string
  campus_id: string
  department_id: (string) | null
  designation_code: string
  employee_no: string
  staff_category: string
  employment_type: string
  status: string
  joined_on: string
  probation_end_on: (string) | null
  confirmed_on: (string) | null
  exit_on: (string) | null
  exit_reason: (string) | null
  reporting_to_staff_id: (string) | null
  work_email: (string) | null
  work_phone: (string) | null
  max_weekly_periods: (number) | null
  notice_period_days: number
  tax_id: (string) | null
  bank_account_name: (string) | null
  bank_account_no: (string) | null
  bank_routing_code: (string) | null
  notes: (string) | null
}
