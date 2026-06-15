export type SubscriptionPlansResponse = 
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
  created_at?: string
  updated_at?: string
  deleted_at?: string
}
