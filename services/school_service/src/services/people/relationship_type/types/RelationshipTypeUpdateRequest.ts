
export type RelationshipTypeUpdateRequest = 
{
  relationship_type_code: (string) | null
  name: string
  is_guardian_eligible: boolean
  sort_order: number
  is_active: boolean
}
