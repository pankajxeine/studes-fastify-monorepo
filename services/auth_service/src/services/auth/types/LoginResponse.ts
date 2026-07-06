import type { AuthUser } from './AuthUser'

export type LoginResponse = 
{
  accessToken: string
  refreshToken: string
  user: AuthUser
}
