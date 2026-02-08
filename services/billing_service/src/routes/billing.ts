import { FastifyPluginAsync } from 'fastify'
import { z } from 'zod'

const invoiceSchema = z.object({
  amount: z.number().positive(),
  currency: z.string().length(3),
  description: z.string().min(2)
})

const billingRoutes: FastifyPluginAsync = async (app) => {
  app.get('/billing/invoices', async (request) => {
    const result = await request.db!.query(
      'select id, amount, currency, description, created_at from invoices order by created_at desc'
    )
    return { items: result.rows }
  })

  app.post('/billing/invoices', async (request, reply) => {
    const body = invoiceSchema.parse(request.body)
    const result = await request.db!.query(
      'insert into invoices (amount, currency, description) values ($1, $2, $3) returning id, amount, currency, description, created_at',
      [body.amount, body.currency.toUpperCase(), body.description]
    )

    reply.code(201)
    return result.rows[0]
  })
}

export default billingRoutes
