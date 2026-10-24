
export type PersonContactUpdateRequest = 
{
  person_id: string
  contact_type: string
  contact_value: string
  is_primary: boolean
  is_verified: boolean
  verified_at: (string) | null
  is_opted_in: boolean
}
