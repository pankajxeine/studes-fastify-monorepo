import type { HardwaresRequest } from './types/HardwaresRequest'
import type { HardwaresResponse } from './types/HardwaresResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { HardwaresController, ListItem, PaginatedResponse } from './HardwaresController'

export class HardwaresService implements HardwaresController {
      public async listHardwares(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HardwaresResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.hardwares.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<HardwaresResponse[]>[],
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

      public async createHardware(app: FastifyInstance, input: HardwaresRequest, request?: FastifyRequest): Promise<HardwaresResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.hardwares.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as HardwaresResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getHardwaresById(app: FastifyInstance, request?: FastifyRequest): Promise<HardwaresResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.hardwares.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('hardwares not found')
      }
      return row.get({ plain: true }) as HardwaresResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateHardware(app: FastifyInstance, input: HardwaresRequest, request?: FastifyRequest): Promise<HardwaresResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.hardwares.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('hardwares not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as HardwaresResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteHardware(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.hardwares.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
