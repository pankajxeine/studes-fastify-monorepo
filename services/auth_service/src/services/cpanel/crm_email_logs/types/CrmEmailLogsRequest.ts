
export type CrmEmailLogsRequest = 
{
  id?: number
  module_name?: string
  sub_id?: number
  email_template_id?: number
  type?: string
  date_of_trigger?: string
  user_id?: number
  email?: string
  subject?: string
  message?: string
  finished?: string
  finish_date_time?: string
  response?: string
  from_email?: string
}
