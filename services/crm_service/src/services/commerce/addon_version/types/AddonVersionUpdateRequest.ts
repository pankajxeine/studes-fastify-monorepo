
export type AddonVersionUpdateRequest = 
{
  addon_id: string
  version_no: number
  status: string
  published_at: (string) | null
  retired_at: (string) | null
}
