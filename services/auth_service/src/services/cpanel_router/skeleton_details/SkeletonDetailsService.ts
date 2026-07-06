import type { SkeletonDetailsRequest } from './types/SkeletonDetailsRequest'
import type { SkeletonDetailsResponse } from './types/SkeletonDetailsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SkeletonDetailsController } from './SkeletonDetailsController'

export class SkeletonDetailsService implements SkeletonDetailsController {
  public async listSkeletonDetails(app: FastifyInstance, request?: FastifyRequest): Promise<SkeletonDetailsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.skeleton_details.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as SkeletonDetailsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSkeletonDetail(app: FastifyInstance, input: SkeletonDetailsRequest, request?: FastifyRequest): Promise<SkeletonDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.skeleton_details.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SkeletonDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getSkeletonDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<SkeletonDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.skeleton_details.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('skeleton_details not found')
      }
      return row.get({ plain: true }) as SkeletonDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSkeletonDetail(app: FastifyInstance, input: SkeletonDetailsRequest, request?: FastifyRequest): Promise<SkeletonDetailsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.skeleton_details.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('skeleton_details not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SkeletonDetailsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteSkeletonDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelRouterModels.skeleton_details.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
