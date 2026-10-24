import type { TeamMemberRequest } from './types/TeamMemberRequest'
import type { TeamMemberUpdateRequest } from './types/TeamMemberUpdateRequest'
import type { TeamMemberResponse } from './types/TeamMemberResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TeamMemberController {
  listTeamMember(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TeamMemberResponse[]>>>
  createTeamMember(app: FastifyInstance, input: TeamMemberRequest, request?: FastifyRequest): Promise<TeamMemberResponse>
  getTeamMemberById(app: FastifyInstance, request?: FastifyRequest): Promise<TeamMemberResponse>
  updateTeamMember(app: FastifyInstance, input: TeamMemberUpdateRequest, request?: FastifyRequest): Promise<TeamMemberResponse>
  deleteTeamMember(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
