import type { FastifyPluginAsync } from 'fastify'
import { TeamMemberService } from '../../services/org/team_member/TeamMemberService'

const TeamMemberRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TeamMemberService()

  app.get('/team_member', { config: {"adminPermission":"org.team_member.read"} }, async (request, reply) => {
    const result = await controller.listTeamMember(app, request)
    return reply.send(result)
  })
  app.post('/team_member', { config: {"adminPermission":"org.team_member.create"} }, async (request, reply) => {
    const result = await controller.createTeamMember(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/team_member/:team_member_id', { config: {"adminPermission":"org.team_member.read"} }, async (request, reply) => {
    const result = await controller.getTeamMemberById(app, request)
    return reply.send(result)
  })
  app.put('/team_member/:team_member_id', { config: {"adminPermission":"org.team_member.update"} }, async (request, reply) => {
    const result = await controller.updateTeamMember(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/team_member/:team_member_id', { config: {"adminPermission":"org.team_member.delete"} }, async (request, reply) => {
    const result = await controller.deleteTeamMember(app, request)
    return reply.send(result)
  })
}

export default TeamMemberRoutes
