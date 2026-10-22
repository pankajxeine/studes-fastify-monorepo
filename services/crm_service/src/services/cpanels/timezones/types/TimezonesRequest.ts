
export type TimezonesRequest = 
{
  id?: number
  country_id?: number
  country_iso_code?: string
  name?: string
  gmt_offset?: number
  status?: "Active" | "Inactive"
}
