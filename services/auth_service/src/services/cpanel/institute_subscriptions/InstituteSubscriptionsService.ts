import type { InstituteSubscriptionsRequest } from './types/InstituteSubscriptionsRequest'
import type { InstituteSubscriptionsResponse } from './types/InstituteSubscriptionsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { InstituteSubscriptionsController } from './InstituteSubscriptionsController'

export class InstituteSubscriptionsService implements InstituteSubscriptionsController {
  public async listInstituteSubscriptions(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteSubscriptionsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_subscriptions.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as InstituteSubscriptionsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createInstituteSubscription(app: FastifyInstance, input: InstituteSubscriptionsRequest, request?: FastifyRequest): Promise<InstituteSubscriptionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_subscriptions.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as InstituteSubscriptionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getInstituteSubscriptionsById(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteSubscriptionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_subscriptions.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('institute_subscriptions not found')
      }
      return row.get({ plain: true }) as InstituteSubscriptionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateInstituteSubscription(app: FastifyInstance, input: InstituteSubscriptionsRequest, request?: FastifyRequest): Promise<InstituteSubscriptionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_subscriptions.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('institute_subscriptions not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as InstituteSubscriptionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteInstituteSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.institute_subscriptions.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
