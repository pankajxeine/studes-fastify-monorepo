import type { Package } from '../openapi/types/Package'
import type { CreatePackageRequest } from '../openapi/types/CreatePackageRequest'
import type { UpdatePackageRequest } from '../openapi/types/UpdatePackageRequest'
import type { PackageListResponse } from '../openapi/types/PackageListResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { PackagesController } from '../openapi/controller/PackagesController'

export class PackagesService implements PackagesController {
  public async listPackages(headers?: RequestHeaders): Promise<PackageListResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async createPackage(input: CreatePackageRequest, headers?: RequestHeaders): Promise<Package> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async getPackage(headers?: RequestHeaders): Promise<Package> {
    void headers
    throw new Error('Not implemented')
  }

  public async updatePackage(input: UpdatePackageRequest, headers?: RequestHeaders): Promise<Package> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async deletePackage(headers?: RequestHeaders): Promise<void> {
    void headers
    throw new Error('Not implemented')
  }
}
