
export type ExpenseCategoryResponse = 
{
  id: number
  public_id: string
  record_code: string
  expense_category_code?: (string) | null
  name: string
  description?: (string) | null
  gl_account_code?: (string) | null
  approval_limit_amount?: (string) | null
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
