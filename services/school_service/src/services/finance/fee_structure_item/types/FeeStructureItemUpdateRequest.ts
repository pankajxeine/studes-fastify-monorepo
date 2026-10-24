
export type FeeStructureItemUpdateRequest = 
{
  fee_structure_id: string
  fee_head_code: string
  amount: string
  frequency: string
  is_optional: boolean
  sort_order: number
  notes: (string) | null
}
