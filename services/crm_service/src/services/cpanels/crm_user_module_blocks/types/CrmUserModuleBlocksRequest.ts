
export type CrmUserModuleBlocksRequest = 
{
  id?: number
  crm_user_module_id?: number
  block_id?: number
  permission?: "full" | "view_only" | "add_update_only" | "none"
}
