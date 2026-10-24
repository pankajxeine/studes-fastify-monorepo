
export type AddonItemResponse = 
{
  id: number
  public_id: string
  record_code: string
  addon_item_id: string
  addon_version_id: string
  module_id: string
  feature_id?: (string) | null
  value?: (unknown) | null
}
