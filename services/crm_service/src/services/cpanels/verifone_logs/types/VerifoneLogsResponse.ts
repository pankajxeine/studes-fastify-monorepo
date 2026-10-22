
export type VerifoneLogsResponse = 
{
  id?: number
  api_name?: string
  request?: string
  response?: string
  endpoint_url?: string
  finished?: "E" | "N" | "Y"
  created_at?: string
  updated_at?: string
}
