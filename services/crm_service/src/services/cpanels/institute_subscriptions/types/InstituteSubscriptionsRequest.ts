
export type InstituteSubscriptionsRequest = 
{
  id?: number
  institute_id?: number
  subscription_plan_id?: number
  subscription_start_date?: string
  subscription_end_date?: string
  billing_cycle?: "Monthly" | "Yearly"
  amount_paid?: number
  payment_status?: "Pending" | "Paid" | "Overdue" | "Cancelled"
  subscription_status?: "Active" | "Inactive" | "Suspended" | "Pending" | "Paid" | "Overdue" | "Expired"
}
