import type { FeeStructureCreateRequest } from '../types/FeeStructureCreateRequest'
import type { FeeStructure } from '../types/FeeStructure'
import type { FeeStructureList } from '../types/FeeStructureList'
import type { FeeAssignmentCreateRequest } from '../types/FeeAssignmentCreateRequest'
import type { FeeAssignment } from '../types/FeeAssignment'
import type { FeePaymentCreateRequest } from '../types/FeePaymentCreateRequest'
import type { FeePayment } from '../types/FeePayment'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface FeesController {
  listFeeStructures(app: FastifyInstance, request?: FastifyRequest): Promise<FeeStructureList>
  createFeeStructure(app: FastifyInstance, input: FeeStructureCreateRequest, request?: FastifyRequest): Promise<FeeStructure>
  assignFeeToStudent(app: FastifyInstance, input: FeeAssignmentCreateRequest, request?: FastifyRequest): Promise<FeeAssignment>
  recordFeePayment(app: FastifyInstance, input: FeePaymentCreateRequest, request?: FastifyRequest): Promise<FeePayment>
}
