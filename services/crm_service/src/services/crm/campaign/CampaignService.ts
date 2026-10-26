import type { CampaignRequest } from './types/CampaignRequest'
import type { CampaignUpdateRequest } from './types/CampaignUpdateRequest'
import type { CampaignResponse } from './types/CampaignResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { CampaignController } from './CampaignController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class CampaignService implements CampaignController {
      public async listCampaign(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CampaignResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_campaign.schema(schema!);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await model.findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => toApiAttributes<ListItem<CampaignResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
        pagination: {
          page,
          limit,
          total: count,
          totalPages: Math.ceil(count / limit),
        },
      }
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createCampaign(app: FastifyInstance, input: CampaignRequest, request?: FastifyRequest): Promise<CampaignResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_campaign.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<CampaignResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCampaignById(app: FastifyInstance, request?: FastifyRequest): Promise<CampaignResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_campaign.schema(schema!);
      const { campaign_id } = (request?.params ?? {}) as { campaign_id?: string | number }
      if (campaign_id === undefined || campaign_id === '') throw httpError(400, 'campaign_id is required')
      const row = await model.findByPk(campaign_id)
      if (!row) {
        throw httpError(404, 'crm_campaign not found')
      }
      return toApiAttributes<CampaignResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCampaign(app: FastifyInstance, input: CampaignUpdateRequest, request?: FastifyRequest): Promise<CampaignResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_campaign.schema(schema!);
      const { campaign_id } = (request?.params ?? {}) as { campaign_id?: string | number }
      if (campaign_id === undefined || campaign_id === '') throw httpError(400, 'campaign_id is required')
      const row = await model.findByPk(campaign_id)
      if (!row) {
        throw httpError(404, 'crm_campaign not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<CampaignResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCampaign(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_campaign.schema(schema!);
      const { campaign_id } = (request?.params ?? {}) as { campaign_id?: string | number }
      if (campaign_id === undefined || campaign_id === '') throw httpError(400, 'campaign_id is required')
      const deletedCount = await model.destroy({ where: { campaignId: campaign_id } })
      if (deletedCount === 0) throw httpError(404, 'crm_campaign not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
