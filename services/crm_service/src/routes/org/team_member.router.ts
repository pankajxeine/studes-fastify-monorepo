import type { FastifyPluginAsync } from 'fastify'
import { TeamMemberService } from '../../services/org/team_member/TeamMemberService'

const TeamMemberRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TeamMemberService()

  app.get('/team_member', async (request, reply) => {
    const result = await controller.listTeamMember(app, request)
    return reply.send(result)
  })
  app.post('/team_member', async (request, reply) => {
    const result = await controller.createTeamMember(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/team_member/:id', async (request, reply) => {
    const result = await controller.getTeamMemberById(app, request)
    return reply.send(result)
  })
  app.put('/team_member/:id', async (request, reply) => {
    const result = await controller.updateTeamMember(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/team_member/:id', async (request, reply) => {
    const result = await controller.deleteTeamMember(app, request)
    return reply.send(result)
  })
}

export default TeamMemberRoutes
