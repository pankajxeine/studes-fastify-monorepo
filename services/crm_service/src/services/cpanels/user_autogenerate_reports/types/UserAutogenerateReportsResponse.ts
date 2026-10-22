
export type UserAutogenerateReportsResponse = 
{
  id?: number
  template_id?: number
  user_id?: number
  interval?: "Daily" | "Monthly" | "Never" | "Weekly" | "Yearly"
  scheduled_time?: string
  created_at?: string
  updated_at?: string
}
