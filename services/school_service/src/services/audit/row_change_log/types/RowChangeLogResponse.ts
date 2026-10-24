
export type RowChangeLogResponse = 
{
  public_id: string
  record_code: string
  row_change_log_id: number
  changed_at: string
  transaction_id: number
  schema_name: string
  table_name: string
  operation: string
  row_pk: unknown
  row_id?: (string) | null
  old_data?: (unknown) | null
  new_data?: (unknown) | null
  changed_columns?: (string) | null
  app_user_id?: (string) | null
  campus_id?: (string) | null
  request_id?: (string) | null
  db_user: string
  application_name?: (string) | null
  client_addr?: (string) | null
}
