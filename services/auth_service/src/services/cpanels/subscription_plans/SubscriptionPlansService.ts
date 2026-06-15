import type { SubscriptionPlansRequest } from './types/SubscriptionPlansRequest'
import type { SubscriptionPlansResponse } from './types/SubscriptionPlansResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubscriptionPlansController } from './SubscriptionPlansController'

export class SubscriptionPlansService implements SubscriptionPlansController {
  public async listSubscriptionPlans(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionPlansResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubscriptionPlan(app: FastifyInstance, input: SubscriptionPlansRequest, request?: FastifyRequest): Promise<SubscriptionPlansResponse> {
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

  public async getSubscriptionPlansById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionPlansResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubscriptionPlan(app: FastifyInstance, input: SubscriptionPlansRequest, request?: FastifyRequest): Promise<SubscriptionPlansResponse> {
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

  public async deleteSubscriptionPlan(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
