
export type BookCategoryResponse = 
{
  id: number
  public_id: string
  record_code: string
  book_category_code?: (string) | null
  name: string
  description?: (string) | null
  dewey_class?: (string) | null
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
