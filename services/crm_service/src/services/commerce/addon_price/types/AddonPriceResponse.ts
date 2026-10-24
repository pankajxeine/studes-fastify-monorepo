
export type AddonPriceResponse = 
{
  id: number
  public_id: string
  record_code: string
  addon_price_id: string
  addon_version_id: string
  price_book_id: string
  billing_period: string
  unit_amount: string
  is_active: boolean
  created_at: string
  created_by?: (string) | null
}
