
export type AlertSystemsRequest = 
{
  id?: number
  title?: string
  description?: string
  alert_type?: "maintenance" | "announcements"
  sites_flag?: "all" | "individual"
  updated_by?: number
  created_by?: number
}
