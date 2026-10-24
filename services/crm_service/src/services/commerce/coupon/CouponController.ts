import type { CouponRequest } from './types/CouponRequest'
import type { CouponUpdateRequest } from './types/CouponUpdateRequest'
import type { CouponResponse } from './types/CouponResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CouponController {
  listCoupon(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CouponResponse[]>>>
  createCoupon(app: FastifyInstance, input: CouponRequest, request?: FastifyRequest): Promise<CouponResponse>
  getCouponById(app: FastifyInstance, request?: FastifyRequest): Promise<CouponResponse>
  updateCoupon(app: FastifyInstance, input: CouponUpdateRequest, request?: FastifyRequest): Promise<CouponResponse>
  deleteCoupon(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
