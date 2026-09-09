export interface JwtPayload {
  /** Stable principal id from public.auth_identities. */
  sub: string
  /** Prevents a tenant token from being used as a control-plane token. */
  audience: 'admin' | 'tenant'
  /** Present only for a tenant-scoped principal. */
  tenantId?: string
  tenantSlug?: string
  /** Schema is validated server-side before being embedded in any query. */
  tenantSchema?: string
  role: string
}
