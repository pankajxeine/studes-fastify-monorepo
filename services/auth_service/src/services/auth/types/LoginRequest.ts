
export type LoginRequest = 
{
  username?: string
  email?: string
  password: string
  /** Admin logins do not require a tenant. Tenant is the default when supplied. */
  audience?: 'admin' | 'tenant'
  tenant_id?: string
  tenant_slug?: string
}
