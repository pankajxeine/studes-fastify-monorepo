
export type SubscriptionPlansRequest = 
{
  id?: number
  plan_name?: string
  institute_type?: string
  monthly_price?: number
  yearly_price?: number
  max_users?: number
  max_students?: number
  features?: Record<string, unknown>
  description?: string
  status?: string
  deleted_at?: string
}
