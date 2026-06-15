import type { DocumentTypesRequest } from './types/DocumentTypesRequest'
import type { DocumentTypesResponse } from './types/DocumentTypesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { DocumentTypesController } from './DocumentTypesController'

export class DocumentTypesService implements DocumentTypesController {
  public async listDocumentTypes(app: FastifyInstance, request?: FastifyRequest): Promise<DocumentTypesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createDocumentType(app: FastifyInstance, input: DocumentTypesRequest, request?: FastifyRequest): Promise<DocumentTypesResponse> {
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

  public async getDocumentTypesById(app: FastifyInstance, request?: FastifyRequest): Promise<DocumentTypesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateDocumentType(app: FastifyInstance, input: DocumentTypesRequest, request?: FastifyRequest): Promise<DocumentTypesResponse> {
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

  public async deleteDocumentType(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
