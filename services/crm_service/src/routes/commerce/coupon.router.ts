import type { FastifyPluginAsync } from 'fastify'
import { CouponService } from '../../services/commerce/coupon/CouponService'

const CouponRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CouponService()

  app.get('/coupon', async (request, reply) => {
    const result = await controller.listCoupon(app, request)
    return reply.send(result)
  })
  app.post('/coupon', async (request, reply) => {
    const result = await controller.createCoupon(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/coupon/:id', async (request, reply) => {
    const result = await controller.getCouponById(app, request)
    return reply.send(result)
  })
  app.put('/coupon/:id', async (request, reply) => {
    const result = await controller.updateCoupon(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/coupon/:id', async (request, reply) => {
    const result = await controller.deleteCoupon(app, request)
    return reply.send(result)
  })
}

export default CouponRoutes
