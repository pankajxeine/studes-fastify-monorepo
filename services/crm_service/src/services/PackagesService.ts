import type { Package } from '../openapi/types/Package'
import type { CreatePackageRequest } from '../openapi/types/CreatePackageRequest'
import type { UpdatePackageRequest } from '../openapi/types/UpdatePackageRequest'
import type { PackageListResponse } from '../openapi/types/PackageListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackagesController } from '../openapi/controller/PackagesController'

export class PackagesService implements PackagesController {
  public async listPackages(app: FastifyInstance,request?: FastifyRequest): Promise<PackageListResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async createPackage(app: FastifyInstance, input: CreatePackageRequest, request?: FastifyRequest): Promise<Package> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async getPackage(app: FastifyInstance,request?: FastifyRequest): Promise<Package> {
    void request
    throw new Error('Not implemented')
  }

  public async updatePackage(app: FastifyInstance, input: UpdatePackageRequest, request?: FastifyRequest): Promise<Package> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async deletePackage(app: FastifyInstance,request?: FastifyRequest): Promise<void> {
    void request
    throw new Error('Not implemented')
  }
}
