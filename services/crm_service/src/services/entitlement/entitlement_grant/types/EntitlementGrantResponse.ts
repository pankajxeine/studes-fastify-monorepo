
export type EntitlementGrantResponse = 
{
  record_code: string
  entitlement_grant_id: string
  tenant_application_id: string
  module_id: string
  feature_id?: (string) | null
  source: string
  source_ref_id: string
  value?: (unknown) | null
  valid_from: string
  valid_to?: (string) | null
}
