import type { FeeStructureCreateRequest } from '../types/FeeStructureCreateRequest'
import type { FeeStructure } from '../types/FeeStructure'
import type { FeeStructureList } from '../types/FeeStructureList'
import type { FeeAssignmentCreateRequest } from '../types/FeeAssignmentCreateRequest'
import type { FeeAssignment } from '../types/FeeAssignment'
import type { FeePaymentCreateRequest } from '../types/FeePaymentCreateRequest'
import type { FeePayment } from '../types/FeePayment'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface FeesController {
  listFeeStructures(headers?: RequestHeaders): Promise<FeeStructureList>
  createFeeStructure(input: FeeStructureCreateRequest, headers?: RequestHeaders): Promise<FeeStructure>
  assignFeeToStudent(input: FeeAssignmentCreateRequest, headers?: RequestHeaders): Promise<FeeAssignment>
  recordFeePayment(input: FeePaymentCreateRequest, headers?: RequestHeaders): Promise<FeePayment>
}
