
export type InstitutesRequest = 
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
  status?: "Active" | "Inactive" | "Suspended" | "Pending"
  activation_date?: string
}
