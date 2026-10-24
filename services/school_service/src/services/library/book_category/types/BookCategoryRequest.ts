
export type BookCategoryRequest = 
{
  book_category_code?: (string) | null
  name: string
  description?: (string) | null
  dewey_class?: (string) | null
  sort_order?: number
  is_active?: boolean
}
