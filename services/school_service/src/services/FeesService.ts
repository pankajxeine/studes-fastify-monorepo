import type { FeeStructureCreateRequest } from '../openapi/types/FeeStructureCreateRequest'
import type { FeeStructure } from '../openapi/types/FeeStructure'
import type { FeeStructureList } from '../openapi/types/FeeStructureList'
import type { FeeAssignmentCreateRequest } from '../openapi/types/FeeAssignmentCreateRequest'
import type { FeeAssignment } from '../openapi/types/FeeAssignment'
import type { FeePaymentCreateRequest } from '../openapi/types/FeePaymentCreateRequest'
import type { FeePayment } from '../openapi/types/FeePayment'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { FeesController } from '../openapi/controller/FeesController'

export class FeesService implements FeesController {
  public async listFeeStructures(headers?: RequestHeaders): Promise<FeeStructureList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createFeeStructure(input: FeeStructureCreateRequest, headers?: RequestHeaders): Promise<FeeStructure> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async assignFeeToStudent(input: FeeAssignmentCreateRequest, headers?: RequestHeaders): Promise<FeeAssignment> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async recordFeePayment(input: FeePaymentCreateRequest, headers?: RequestHeaders): Promise<FeePayment> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
