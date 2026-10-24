
export type ConcessionTypeUpdateRequest = 
{
  concession_type_code: (string) | null
  name: string
  description: (string) | null
  default_discount_kind: string
  default_discount_value: number
  requires_document: boolean
  sort_order: number
  is_active: boolean
}
