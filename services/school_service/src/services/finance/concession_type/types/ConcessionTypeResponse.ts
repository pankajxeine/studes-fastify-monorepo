
export type ConcessionTypeResponse = 
{
  id: number
  public_id: string
  record_code: string
  concession_type_code?: (string) | null
  name: string
  description?: (string) | null
  default_discount_kind: string
  default_discount_value: number
  requires_document: boolean
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
