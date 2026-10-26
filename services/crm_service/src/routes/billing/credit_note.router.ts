import type { FastifyPluginAsync } from 'fastify'
import { CreditNoteService } from '../../services/billing/credit_note/CreditNoteService'

const CreditNoteRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CreditNoteService()

  app.get('/credit_note', { config: {"adminPermission":"billing.credit_note.read"} }, async (request, reply) => {
    const result = await controller.listCreditNote(app, request)
    return reply.send(result)
  })
  app.post('/credit_note', { config: {"adminPermission":"billing.credit_note.create"} }, async (request, reply) => {
    const result = await controller.createCreditNote(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/credit_note/:credit_note_id', { config: {"adminPermission":"billing.credit_note.read"} }, async (request, reply) => {
    const result = await controller.getCreditNoteById(app, request)
    return reply.send(result)
  })
  app.put('/credit_note/:credit_note_id', { config: {"adminPermission":"billing.credit_note.update"} }, async (request, reply) => {
    const result = await controller.updateCreditNote(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/credit_note/:credit_note_id', { config: {"adminPermission":"billing.credit_note.delete"} }, async (request, reply) => {
    const result = await controller.deleteCreditNote(app, request)
    return reply.send(result)
  })
}

export default CreditNoteRoutes
