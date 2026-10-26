
export type PriceBookResponse = 
{
  record_code: string
  price_book_id: string
  price_book_code: string
  name: string
  currency_code: string
  legal_entity_id?: (string) | null
  is_default: boolean
  valid_from: string
  valid_to?: (string) | null
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
