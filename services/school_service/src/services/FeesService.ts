import type { FeeStructureCreateRequest } from '../openapi/types/FeeStructureCreateRequest'
import type { FeeStructure } from '../openapi/types/FeeStructure'
import type { FeeStructureList } from '../openapi/types/FeeStructureList'
import type { FeeAssignmentCreateRequest } from '../openapi/types/FeeAssignmentCreateRequest'
import type { FeeAssignment } from '../openapi/types/FeeAssignment'
import type { FeePaymentCreateRequest } from '../openapi/types/FeePaymentCreateRequest'
import type { FeePayment } from '../openapi/types/FeePayment'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { FeesController } from '../openapi/controller/FeesController'

export class FeesService implements FeesController {
  public async listFeeStructures(app: FastifyInstance,request?: FastifyRequest): Promise<FeeStructureList> {
    void request
    throw new Error('Not implemented')
  }

  public async createFeeStructure(app: FastifyInstance, input: FeeStructureCreateRequest, request?: FastifyRequest): Promise<FeeStructure> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async assignFeeToStudent(app: FastifyInstance, input: FeeAssignmentCreateRequest, request?: FastifyRequest): Promise<FeeAssignment> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async recordFeePayment(app: FastifyInstance, input: FeePaymentCreateRequest, request?: FastifyRequest): Promise<FeePayment> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
