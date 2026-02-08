export type UpdatePackageRequest = 
{
  name?: string
  price?: number
  currency?: string
  status?: "active" | "inactive"
  features?: string[]
}
