import type { MasterPasswordsRequest } from './types/MasterPasswordsRequest'
import type { MasterPasswordsResponse } from './types/MasterPasswordsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { MasterPasswordsController } from './MasterPasswordsController'

export class MasterPasswordsService implements MasterPasswordsController {
  public async listMasterPasswords(app: FastifyInstance, request?: FastifyRequest): Promise<MasterPasswordsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createMasterPassword(app: FastifyInstance, input: MasterPasswordsRequest, request?: FastifyRequest): Promise<MasterPasswordsResponse> {
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

  public async getMasterPasswordsById(app: FastifyInstance, request?: FastifyRequest): Promise<MasterPasswordsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateMasterPassword(app: FastifyInstance, input: MasterPasswordsRequest, request?: FastifyRequest): Promise<MasterPasswordsResponse> {
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

  public async deleteMasterPassword(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
