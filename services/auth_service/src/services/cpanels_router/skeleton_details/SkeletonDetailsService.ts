import type { SkeletonDetailsRequest } from './types/SkeletonDetailsRequest'
import type { SkeletonDetailsResponse } from './types/SkeletonDetailsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SkeletonDetailsController } from './SkeletonDetailsController'

export class SkeletonDetailsService implements SkeletonDetailsController {
  public async listSkeletonDetails(app: FastifyInstance, request?: FastifyRequest): Promise<SkeletonDetailsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSkeletonDetail(app: FastifyInstance, input: SkeletonDetailsRequest, request?: FastifyRequest): Promise<SkeletonDetailsResponse> {
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

  public async getSkeletonDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<SkeletonDetailsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSkeletonDetail(app: FastifyInstance, input: SkeletonDetailsRequest, request?: FastifyRequest): Promise<SkeletonDetailsResponse> {
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

  public async deleteSkeletonDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
