import type { TeamRequest } from './types/TeamRequest'
import type { TeamUpdateRequest } from './types/TeamUpdateRequest'
import type { TeamResponse } from './types/TeamResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TeamController {
  listTeam(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TeamResponse[]>>>
  createTeam(app: FastifyInstance, input: TeamRequest, request?: FastifyRequest): Promise<TeamResponse>
  getTeamById(app: FastifyInstance, request?: FastifyRequest): Promise<TeamResponse>
  updateTeam(app: FastifyInstance, input: TeamUpdateRequest, request?: FastifyRequest): Promise<TeamResponse>
  deleteTeam(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
