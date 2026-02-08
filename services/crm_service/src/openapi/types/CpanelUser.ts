export type CpanelUser = 
{
  id: string
  agent_id: string
  username: string
  status: "active" | "suspended"
  created_at?: string
}
