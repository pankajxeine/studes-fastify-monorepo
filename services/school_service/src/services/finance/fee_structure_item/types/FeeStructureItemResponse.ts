
export type FeeStructureItemResponse = 
{
  id: number
  public_id: string
  record_code: string
  fee_structure_item_id: string
  fee_structure_id: string
  fee_head_code: string
  amount: string
  frequency: string
  is_optional: boolean
  sort_order: number
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
