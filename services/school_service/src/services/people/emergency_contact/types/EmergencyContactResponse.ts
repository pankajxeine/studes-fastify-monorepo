
export type EmergencyContactResponse = 
{
  id: number
  public_id: string
  record_code: string
  emergency_contact_id: string
  person_id: string
  contact_person_id?: (string) | null
  contact_name?: (string) | null
  relationship_type_code: string
  phone: string
  alt_phone?: (string) | null
  email?: (string) | null
  priority: number
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
