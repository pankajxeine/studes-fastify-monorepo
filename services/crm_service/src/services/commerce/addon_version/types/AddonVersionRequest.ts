
export type AddonVersionRequest = 
{
  addon_id: string
  version_no: number
  status?: string
  published_at?: (string) | null
  retired_at?: (string) | null
}
