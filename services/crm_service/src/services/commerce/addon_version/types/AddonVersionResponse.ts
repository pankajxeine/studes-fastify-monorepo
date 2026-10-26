
export type AddonVersionResponse = 
{
  record_code: string
  addon_version_id: string
  addon_id: string
  version_no: number
  status: string
  published_at?: (string) | null
  retired_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
