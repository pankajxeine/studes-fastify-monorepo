import type { SalesAgentsRequest } from './types/SalesAgentsRequest'
import type { SalesAgentsResponse } from './types/SalesAgentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SalesAgentsController, ListItem, PaginatedResponse } from './SalesAgentsController'

export class SalesAgentsService implements SalesAgentsController {
  public async listSalesAgents(
    app: FastifyInstance,
    request?: FastifyRequest,
  ): Promise<PaginatedResponse<ListItem<SalesAgentsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema
      if (!schema) throw new Error('Tenant schema missing from request context')

      // bind every model used in the query to the tenant schema
      const model = app.cpanelModels.sales_agents.schema(schema)
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)

      const { count, rows } = await model.findAndCountAll({
        include: [
          { model: app.cpanelModels.states.schema(schema), as: 'state', attributes: ['id', 'name'] },
          { model: app.cpanelModels.countries.schema(schema), as: 'country', attributes: ['id', 'name'] },
        ],
        order: [['created_at', 'DESC']],
        limit,
        offset: (page - 1) * limit,
        distinct: true, // keeps count correct when joins multiply rows
      })

      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<SalesAgentsResponse[]>[],
        pagination: {
          page,
          limit,
          total: count,
          totalPages: Math.ceil(count / limit),
        },
      }
    } catch (err) {
      app.log.error(err)
      throw err
    }
  }

  public async createSalesAgent(app: FastifyInstance, input: SalesAgentsRequest, request?: FastifyRequest): Promise<SalesAgentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sales_agents.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as SalesAgentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getSalesAgentsById(app: FastifyInstance, request?: FastifyRequest): Promise<SalesAgentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      if (!schema) throw new Error('Tenant schema missing from request context')

      // bind model to tenant schema
      const model = app.cpanelModels.sales_agents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findOne({
        where: { id },
        include: [
          { model: app.cpanelModels.states.schema(schema), as: 'state', attributes: ['id', 'name'] },
          { model: app.cpanelModels.countries.schema(schema), as: 'country', attributes: ['id', 'name'] },
        ],
        // include: [{ model: SalesAgent, as: 'salesAgents' }],
      })
      //const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sales_agents not found')
      }
      return row.get({ plain: true }) as SalesAgentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSalesAgent(app: FastifyInstance, input: SalesAgentsRequest, request?: FastifyRequest): Promise<SalesAgentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sales_agents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('sales_agents not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as SalesAgentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sales_agents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
