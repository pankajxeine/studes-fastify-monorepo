
export type ItemRequest = 
{
  item_category_code: string
  sku: string
  name: string
  description?: (string) | null
  unit_of_measure?: string
  is_consumable?: boolean
  is_asset?: boolean
  reorder_level?: number
  reorder_quantity?: number
  standard_cost_amount?: string
  preferred_vendor_id?: (string) | null
  quantity_on_hand?: number
  is_active?: boolean
}
