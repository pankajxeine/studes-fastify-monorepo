import type { CouponRequest } from './types/CouponRequest'
import type { CouponUpdateRequest } from './types/CouponUpdateRequest'
import type { CouponResponse } from './types/CouponResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { CouponController } from './CouponController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class CouponService implements CouponController {
      public async listCoupon(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CouponResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_coupon.schema(schema!);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await model.findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => toApiAttributes<ListItem<CouponResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
        pagination: {
          page,
          limit,
          total: count,
          totalPages: Math.ceil(count / limit),
        },
      }
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createCoupon(app: FastifyInstance, input: CouponRequest, request?: FastifyRequest): Promise<CouponResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_coupon.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<CouponResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCouponById(app: FastifyInstance, request?: FastifyRequest): Promise<CouponResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_coupon.schema(schema!);
      const { coupon_id } = (request?.params ?? {}) as { coupon_id?: string | number }
      if (coupon_id === undefined || coupon_id === '') throw httpError(400, 'coupon_id is required')
      const row = await model.findByPk(coupon_id)
      if (!row) {
        throw httpError(404, 'commerce_coupon not found')
      }
      return toApiAttributes<CouponResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCoupon(app: FastifyInstance, input: CouponUpdateRequest, request?: FastifyRequest): Promise<CouponResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_coupon.schema(schema!);
      const { coupon_id } = (request?.params ?? {}) as { coupon_id?: string | number }
      if (coupon_id === undefined || coupon_id === '') throw httpError(400, 'coupon_id is required')
      const row = await model.findByPk(coupon_id)
      if (!row) {
        throw httpError(404, 'commerce_coupon not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<CouponResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCoupon(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_coupon.schema(schema!);
      const { coupon_id } = (request?.params ?? {}) as { coupon_id?: string | number }
      if (coupon_id === undefined || coupon_id === '') throw httpError(400, 'coupon_id is required')
      const deletedCount = await model.destroy({ where: { couponId: coupon_id } })
      if (deletedCount === 0) throw httpError(404, 'commerce_coupon not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
