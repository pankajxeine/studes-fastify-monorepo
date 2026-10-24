import type { FastifyPluginAsync } from 'fastify'
import { FileService } from '../../services/docs/file/FileService'

const FileRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FileService()

  app.get('/file', async (request, reply) => {
    const result = await controller.listFile(app, request)
    return reply.send(result)
  })
  app.post('/file', async (request, reply) => {
    const result = await controller.createFile(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/file/:id', async (request, reply) => {
    const result = await controller.getFileById(app, request)
    return reply.send(result)
  })
  app.put('/file/:id', async (request, reply) => {
    const result = await controller.updateFile(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/file/:id', async (request, reply) => {
    const result = await controller.deleteFile(app, request)
    return reply.send(result)
  })
}

export default FileRoutes
