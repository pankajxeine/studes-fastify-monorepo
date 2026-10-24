
export type PriceBookRequest = 
{
  price_book_code: string
  name: string
  currency_code: string
  legal_entity_id?: (string) | null
  is_default?: boolean
  valid_from?: string
  valid_to?: (string) | null
  is_active?: boolean
}
