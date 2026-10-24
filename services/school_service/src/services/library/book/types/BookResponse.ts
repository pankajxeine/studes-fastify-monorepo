
export type BookResponse = 
{
  id: number
  public_id: string
  record_code: string
  book_id: string
  book_category_code: string
  isbn?: (string) | null
  title: string
  subtitle?: (string) | null
  edition?: (string) | null
  publisher?: (string) | null
  published_year?: (number) | null
  language_code: string
  page_count?: (number) | null
  call_no?: (string) | null
  summary?: (string) | null
  is_reference_only: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
  deleted_at?: (string) | null
}
