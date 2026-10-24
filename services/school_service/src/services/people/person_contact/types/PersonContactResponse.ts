
export type PersonContactResponse = 
{
  id: number
  public_id: string
  record_code: string
  person_contact_id: string
  person_id: string
  contact_type: string
  contact_value: string
  is_primary: boolean
  is_verified: boolean
  verified_at?: (string) | null
  is_opted_in: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
