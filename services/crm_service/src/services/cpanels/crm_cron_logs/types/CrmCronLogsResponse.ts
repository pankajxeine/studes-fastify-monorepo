
export type CrmCronLogsResponse = 
{
  id?: number
  cron?: string
  log?: string
  start_time?: string
  end_time?: string
  status?: "Open" | "Completed" | "Inprogress"
  created_at?: string
  updated_at?: string
}
