import type { FastifyPluginAsync } from 'fastify'
import { ChannelProviderService } from '../../services/notify/channel_provider/ChannelProviderService'

const ChannelProviderRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ChannelProviderService()

  app.get('/channel_provider', { config: {"adminPermission":"notify.channel_provider.read"} }, async (request, reply) => {
    const result = await controller.listChannelProvider(app, request)
    return reply.send(result)
  })
  app.post('/channel_provider', { config: {"adminPermission":"notify.channel_provider.create"} }, async (request, reply) => {
    const result = await controller.createChannelProvider(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/channel_provider/:channel_provider_id', { config: {"adminPermission":"notify.channel_provider.read"} }, async (request, reply) => {
    const result = await controller.getChannelProviderById(app, request)
    return reply.send(result)
  })
  app.put('/channel_provider/:channel_provider_id', { config: {"adminPermission":"notify.channel_provider.update"} }, async (request, reply) => {
    const result = await controller.updateChannelProvider(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/channel_provider/:channel_provider_id', { config: {"adminPermission":"notify.channel_provider.delete"} }, async (request, reply) => {
    const result = await controller.deleteChannelProvider(app, request)
    return reply.send(result)
  })
}

export default ChannelProviderRoutes
