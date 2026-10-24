
export type AddonPriceUpdateRequest = 
{
  addon_version_id: string
  price_book_id: string
  billing_period: string
  unit_amount: string
  is_active: boolean
}
