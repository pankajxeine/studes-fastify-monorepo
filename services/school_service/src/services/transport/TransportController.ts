import type { TransportRouteCreateRequest } from './types/TransportRouteCreateRequest'
import type { TransportRoute } from './types/TransportRoute'
import type { TransportRouteList } from './types/TransportRouteList'
import type { TransportVehicleCreateRequest } from './types/TransportVehicleCreateRequest'
import type { TransportVehicle } from './types/TransportVehicle'
import type { TransportAssignmentCreateRequest } from './types/TransportAssignmentCreateRequest'
import type { TransportAssignment } from './types/TransportAssignment'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface TransportController {
  listTransportRoutes(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TransportRouteList>>>
  createTransportRoute(app: FastifyInstance, input: TransportRouteCreateRequest, request?: FastifyRequest): Promise<TransportRoute>
  createTransportVehicle(app: FastifyInstance, input: TransportVehicleCreateRequest, request?: FastifyRequest): Promise<TransportVehicle>
  assignTransport(app: FastifyInstance, input: TransportAssignmentCreateRequest, request?: FastifyRequest): Promise<TransportAssignment>
}
