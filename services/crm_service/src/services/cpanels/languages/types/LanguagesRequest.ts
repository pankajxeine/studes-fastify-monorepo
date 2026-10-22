
export type LanguagesRequest = 
{
  id?: number
  name?: string
  native_name?: string
  code?: string
  iso1_code?: string
  iso2_code?: string
  iso3_code?: string
  status?: "Active" | "Inactive"
}
