
export type BookUpdateRequest = 
{
  book_category_code: string
  isbn: (string) | null
  title: string
  subtitle: (string) | null
  edition: (string) | null
  publisher: (string) | null
  published_year: (number) | null
  language_code: string
  page_count: (number) | null
  call_no: (string) | null
  summary: (string) | null
  is_reference_only: boolean
}
