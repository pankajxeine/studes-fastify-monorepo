import type { Package } from '../types/Package'
import type { CreatePackageRequest } from '../types/CreatePackageRequest'
import type { UpdatePackageRequest } from '../types/UpdatePackageRequest'
import type { PackageListResponse } from '../types/PackageListResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface PackagesController {
  listPackages(headers?: RequestHeaders): Promise<PackageListResponse>
  createPackage(input: CreatePackageRequest, headers?: RequestHeaders): Promise<Package>
  getPackage(headers?: RequestHeaders): Promise<Package>
  updatePackage(input: UpdatePackageRequest, headers?: RequestHeaders): Promise<Package>
  deletePackage(headers?: RequestHeaders): Promise<void>
}
