
export type UserAutogenerateReportsRequest = 
{
  id?: number
  template_id?: number
  user_id?: number
  interval?: "Daily" | "Monthly" | "Never" | "Weekly" | "Yearly"
  scheduled_time?: string
}
