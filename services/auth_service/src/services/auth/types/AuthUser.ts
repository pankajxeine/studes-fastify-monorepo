
export type AuthUser = 
{
  id: string
  email: string
  username: string
  first_name?: string
  last_name?: string
  role?: string
  audience?: 'admin' | 'tenant'
  tenant_id?: string
  tenant_slug?: string
}
