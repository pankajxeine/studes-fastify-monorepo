
export type CanteenOrderLineResponse = 
{
  id: number
  public_id: string
  record_code: string
  canteen_order_line_id: string
  canteen_order_id: string
  line_no: number
  menu_item_id: string
  quantity: number
  unit_price_amount: string
  line_amount?: (number) | null
  special_instructions?: (string) | null
  allergen_warning?: (string) | null
  allergen_override_by_user_id?: (string) | null
  allergen_override_reason?: (string) | null
  allergen_override_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
