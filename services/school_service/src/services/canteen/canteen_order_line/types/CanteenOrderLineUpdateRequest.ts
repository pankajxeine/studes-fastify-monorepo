
export type CanteenOrderLineUpdateRequest = 
{
  canteen_order_id: string
  line_no: number
  menu_item_id: string
  quantity: number
  unit_price_amount: string
  line_amount: (number) | null
  special_instructions: (string) | null
  allergen_warning: (string) | null
  allergen_override_by_user_id: (string) | null
  allergen_override_reason: (string) | null
  allergen_override_at: (string) | null
}
