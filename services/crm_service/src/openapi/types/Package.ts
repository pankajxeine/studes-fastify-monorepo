export type Package = 
{
  id: string
  name: string
  price: number
  currency: string
  status: "active" | "inactive"
  features?: string[]
}
