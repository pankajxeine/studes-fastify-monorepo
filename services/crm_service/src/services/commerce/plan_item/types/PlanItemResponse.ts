
export type PlanItemResponse = 
{
  id: number
  public_id: string
  record_code: string
  plan_item_id: string
  plan_version_id: string
  module_id: string
  feature_id?: (string) | null
  value?: (unknown) | null
}
