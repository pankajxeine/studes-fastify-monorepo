
export type PlanItemResponse = 
{
  record_code: string
  plan_item_id: string
  plan_version_id: string
  module_id: string
  feature_id?: (string) | null
  value?: (unknown) | null
}
