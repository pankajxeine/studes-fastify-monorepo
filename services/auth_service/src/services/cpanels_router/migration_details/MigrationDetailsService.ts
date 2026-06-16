import type { MigrationDetailsRequest } from './types/MigrationDetailsRequest'
import type { MigrationDetailsResponse } from './types/MigrationDetailsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { MigrationDetailsController } from './MigrationDetailsController'

export class MigrationDetailsService implements MigrationDetailsController {
  public async listMigrationDetails(app: FastifyInstance, request?: FastifyRequest): Promise<MigrationDetailsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createMigrationDetail(app: FastifyInstance, input: MigrationDetailsRequest, request?: FastifyRequest): Promise<MigrationDetailsResponse> {
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

  public async getMigrationDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<MigrationDetailsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateMigrationDetail(app: FastifyInstance, input: MigrationDetailsRequest, request?: FastifyRequest): Promise<MigrationDetailsResponse> {
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

  public async deleteMigrationDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
