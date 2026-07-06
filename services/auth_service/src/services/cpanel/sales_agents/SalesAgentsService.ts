import type { SalesAgentsRequest } from './types/SalesAgentsRequest'
import type { SalesAgentsResponse } from './types/SalesAgentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SalesAgentsController } from './SalesAgentsController'

export class SalesAgentsService implements SalesAgentsController {
  public async listSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<SalesAgentsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sales_agents.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as SalesAgentsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSalesAgent(app: FastifyInstance, input: SalesAgentsRequest, request?: FastifyRequest): Promise<SalesAgentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.sales_agents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
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
      const schema = request?.cpanelBbSchema;
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
