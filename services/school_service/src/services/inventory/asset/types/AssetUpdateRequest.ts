
export type AssetUpdateRequest = 
{
  asset_tag: string
  item_id: string
  campus_id: string
  room_id: (string) | null
  purchase_order_line_id: (string) | null
  assigned_to_person_id: (string) | null
  assigned_on: (string) | null
  serial_no: (string) | null
  model: (string) | null
  status: string
  condition: string
  acquired_on: string
  acquisition_cost_amount: string
  useful_life_years: number
  salvage_value_amount: string
  warranty_expiry_on: (string) | null
  disposed_on: (string) | null
  disposal_reason: (string) | null
  notes: (string) | null
}
