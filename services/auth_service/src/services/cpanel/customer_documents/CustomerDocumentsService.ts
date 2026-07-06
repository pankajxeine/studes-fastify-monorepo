import type { CustomerDocumentsRequest } from './types/CustomerDocumentsRequest'
import type { CustomerDocumentsResponse } from './types/CustomerDocumentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerDocumentsController } from './CustomerDocumentsController'

export class CustomerDocumentsService implements CustomerDocumentsController {
  public async listCustomerDocuments(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDocumentsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_documents.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CustomerDocumentsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerDocument(app: FastifyInstance, input: CustomerDocumentsRequest, request?: FastifyRequest): Promise<CustomerDocumentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_documents.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerDocumentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCustomerDocumentsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDocumentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_documents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_documents not found')
      }
      return row.get({ plain: true }) as CustomerDocumentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomerDocument(app: FastifyInstance, input: CustomerDocumentsRequest, request?: FastifyRequest): Promise<CustomerDocumentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_documents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_documents not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerDocumentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteCustomerDocument(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_documents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
