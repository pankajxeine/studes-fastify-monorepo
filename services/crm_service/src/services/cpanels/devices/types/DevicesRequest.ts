
export type DevicesRequest = 
{
  id?: number
  name?: string
  status?: "Active" | "Inactive"
  device_type?: "Ingenico" | "PAX A Series" | "PAX E Series" | "PAX S Series" | "Verifone"
  device_type_code?: string
  api_method?: "None" | "API_VFOBS" | "API_PAX" | "API_Ingenico" | "API_VFBaltic"
  verifone_package_id?: string
  contents?: string
  videos?: string
}
