
export type ExpenseCategoryRequest = 
{
  expense_category_code?: (string) | null
  name: string
  description?: (string) | null
  gl_account_code?: (string) | null
  approval_limit_amount?: (string) | null
  sort_order?: number
  is_active?: boolean
}
