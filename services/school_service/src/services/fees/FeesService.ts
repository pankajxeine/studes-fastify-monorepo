import type { FeeStructureCreateRequest } from './types/FeeStructureCreateRequest'
import type { FeeStructure } from './types/FeeStructure'
import type { FeeStructureList } from './types/FeeStructureList'
import type { FeeAssignmentCreateRequest } from './types/FeeAssignmentCreateRequest'
import type { FeeAssignment } from './types/FeeAssignment'
import type { FeePaymentCreateRequest } from './types/FeePaymentCreateRequest'
import type { FeePayment } from './types/FeePayment'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { FeesController, ListItem, PaginatedResponse } from './FeesController'

export class FeesService implements FeesController {
      public async listFeeStructures(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FeeStructureList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createFeeStructure(app: FastifyInstance, input: FeeStructureCreateRequest, request?: FastifyRequest): Promise<FeeStructure> {
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

      public async assignFeeToStudent(app: FastifyInstance, input: FeeAssignmentCreateRequest, request?: FastifyRequest): Promise<FeeAssignment> {
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

      public async recordFeePayment(app: FastifyInstance, input: FeePaymentCreateRequest, request?: FastifyRequest): Promise<FeePayment> {
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

}
