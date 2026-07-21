import type { CustomerNotesRequest } from './types/CustomerNotesRequest'
import type { CustomerNotesResponse } from './types/CustomerNotesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerNotesController } from './CustomerNotesController'

export class CustomerNotesService implements CustomerNotesController {
  public async listCustomerNotes(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNotesResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_notes.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CustomerNotesResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerNote(app: FastifyInstance, input: CustomerNotesRequest, request?: FastifyRequest): Promise<CustomerNotesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_notes.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerNotesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCustomerNotesById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNotesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_notes.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_notes not found')
      }
      return row.get({ plain: true }) as CustomerNotesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomerNote(app: FastifyInstance, input: CustomerNotesRequest, request?: FastifyRequest): Promise<CustomerNotesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_notes.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_notes not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerNotesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteCustomerNote(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_notes.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
