
export type EmergencyContactRequest = 
{
  person_id: string
  contact_person_id?: (string) | null
  contact_name?: (string) | null
  relationship_type_code: string
  phone: string
  alt_phone?: (string) | null
  email?: (string) | null
  priority?: number
  notes?: (string) | null
}
