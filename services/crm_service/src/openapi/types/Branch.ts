export type Branch = 
{
  id: string
  name: string
  city: string
  state?: string
  country?: string
  status: "active" | "inactive"
}
