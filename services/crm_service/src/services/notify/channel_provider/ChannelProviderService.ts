import type { ChannelProviderRequest } from './types/ChannelProviderRequest'
import type { ChannelProviderUpdateRequest } from './types/ChannelProviderUpdateRequest'
import type { ChannelProviderResponse } from './types/ChannelProviderResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ChannelProviderController } from './ChannelProviderController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ChannelProviderService implements ChannelProviderController {
      public async listChannelProvider(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ChannelProviderResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_channel_provider.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ChannelProviderResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createChannelProvider(app: FastifyInstance, input: ChannelProviderRequest, request?: FastifyRequest): Promise<ChannelProviderResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_channel_provider.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ChannelProviderResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getChannelProviderById(app: FastifyInstance, request?: FastifyRequest): Promise<ChannelProviderResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_channel_provider.schema(schema!);
      const { channel_provider_id } = (request?.params ?? {}) as { channel_provider_id?: string | number }
      if (channel_provider_id === undefined || channel_provider_id === '') throw httpError(400, 'channel_provider_id is required')
      const row = await model.findByPk(channel_provider_id)
      if (!row) {
        throw httpError(404, 'notify_channel_provider not found')
      }
      return toApiAttributes<ChannelProviderResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateChannelProvider(app: FastifyInstance, input: ChannelProviderUpdateRequest, request?: FastifyRequest): Promise<ChannelProviderResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_channel_provider.schema(schema!);
      const { channel_provider_id } = (request?.params ?? {}) as { channel_provider_id?: string | number }
      if (channel_provider_id === undefined || channel_provider_id === '') throw httpError(400, 'channel_provider_id is required')
      const row = await model.findByPk(channel_provider_id)
      if (!row) {
        throw httpError(404, 'notify_channel_provider not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ChannelProviderResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteChannelProvider(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_channel_provider.schema(schema!);
      const { channel_provider_id } = (request?.params ?? {}) as { channel_provider_id?: string | number }
      if (channel_provider_id === undefined || channel_provider_id === '') throw httpError(400, 'channel_provider_id is required')
      const deletedCount = await model.destroy({ where: { channelProviderId: channel_provider_id } })
      if (deletedCount === 0) throw httpError(404, 'notify_channel_provider not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
