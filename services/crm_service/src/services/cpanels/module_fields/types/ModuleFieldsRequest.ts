
export type ModuleFieldsRequest = 
{
  id?: number
  industry_id?: number
  module_id?: number
  module_key?: string
  block_id?: number
  block_key?: string
  table_name?: string
  field_label?: string
  field_name?: string
  field_type?: string
  field_key?: string
  import_is_required?: boolean
  export_is_required?: boolean
  is_skipped?: boolean
  sequence?: number
}
