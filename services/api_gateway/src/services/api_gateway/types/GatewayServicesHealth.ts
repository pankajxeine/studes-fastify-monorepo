import type { GatewayServiceHealth } from './GatewayServiceHealth'

export type GatewayServicesHealth = 
{
  ok: boolean
  services: 
{
  auth: GatewayServiceHealth
  billing: GatewayServiceHealth
  notification: GatewayServiceHealth
}
}
