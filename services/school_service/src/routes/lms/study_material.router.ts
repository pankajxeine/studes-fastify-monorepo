import type { FastifyPluginAsync } from 'fastify'
import { StudyMaterialService } from '../../services/lms/study_material/StudyMaterialService'

const StudyMaterialRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudyMaterialService()

  app.get('/study_material', async (request, reply) => {
    const result = await controller.listStudyMaterial(app, request)
    return reply.send(result)
  })
  app.post('/study_material', async (request, reply) => {
    const result = await controller.createStudyMaterial(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/study_material/:id', async (request, reply) => {
    const result = await controller.getStudyMaterialById(app, request)
    return reply.send(result)
  })
  app.put('/study_material/:id', async (request, reply) => {
    const result = await controller.updateStudyMaterial(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/study_material/:id', async (request, reply) => {
    const result = await controller.deleteStudyMaterial(app, request)
    return reply.send(result)
  })
}

export default StudyMaterialRoutes
