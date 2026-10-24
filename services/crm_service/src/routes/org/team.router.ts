import type { FastifyPluginAsync } from 'fastify'
import { TeamService } from '../../services/org/team/TeamService'

const TeamRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TeamService()

  app.get('/team', async (request, reply) => {
    const result = await controller.listTeam(app, request)
    return reply.send(result)
  })
  app.post('/team', async (request, reply) => {
    const result = await controller.createTeam(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/team/:id', async (request, reply) => {
    const result = await controller.getTeamById(app, request)
    return reply.send(result)
  })
  app.put('/team/:id', async (request, reply) => {
    const result = await controller.updateTeam(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/team/:id', async (request, reply) => {
    const result = await controller.deleteTeam(app, request)
    return reply.send(result)
  })
}

export default TeamRoutes
