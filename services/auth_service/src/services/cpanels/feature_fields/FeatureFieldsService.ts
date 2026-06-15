import type { FeatureFieldsRequest } from './types/FeatureFieldsRequest'
import type { FeatureFieldsResponse } from './types/FeatureFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { FeatureFieldsController } from './FeatureFieldsController'

export class FeatureFieldsService implements FeatureFieldsController {
  public async listFeatureFields(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureFieldsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createFeatureField(app: FastifyInstance, input: FeatureFieldsRequest, request?: FastifyRequest): Promise<FeatureFieldsResponse> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getFeatureFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureFieldsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateFeatureField(app: FastifyInstance, input: FeatureFieldsRequest, request?: FastifyRequest): Promise<FeatureFieldsResponse> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteFeatureField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }
}
