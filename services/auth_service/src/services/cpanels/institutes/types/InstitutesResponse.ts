export type InstitutesResponse = 
{
  id?: number
  name?: string
  schema_name?: string
  institute_type?: string
  registration_number?: string
  principal_name?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  postal_code?: number
  country?: string
  description?: string
  settings?: Record<string, unknown>
  status?: string
  activation_date?: string
  created_at?: string
  updated_at?: string
}
