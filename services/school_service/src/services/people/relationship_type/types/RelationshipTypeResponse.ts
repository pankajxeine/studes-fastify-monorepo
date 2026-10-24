
export type RelationshipTypeResponse = 
{
  id: number
  public_id: string
  record_code: string
  relationship_type_code?: (string) | null
  name: string
  is_guardian_eligible: boolean
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
