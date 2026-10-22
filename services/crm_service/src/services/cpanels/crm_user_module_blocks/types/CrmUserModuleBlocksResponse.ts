
export type CrmUserModuleBlocksResponse = 
{
  id?: number
  crm_user_module_id?: number
  block_id?: number
  permission?: "full" | "view_only" | "add_update_only" | "none"
  created_at?: string
  updated_at?: string
}
