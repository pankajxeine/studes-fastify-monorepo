import type { UserAlertsTypeRequest } from './types/UserAlertsTypeRequest'
import type { UserAlertsTypeResponse } from './types/UserAlertsTypeResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserAlertsTypeController, ListItem, PaginatedResponse } from './UserAlertsTypeController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

function getBelongsToIncludes(model: any, schema: string) {
  const associations = Object.values(model.associations ?? {}) as any[]
  const byForeignKey = new Map<string, any>()

  for (const association of associations) {
    if (association.associationType !== 'BelongsTo') continue

    const foreignKey = String(association.foreignKey ?? '')
    const key = foreignKey
      .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      .replace(/_?id$/i, '')
      .toLowerCase()
    if (!key) continue

    const current = byForeignKey.get(key)
    if (!current || String(association.as).toLowerCase() === key) {
      byForeignKey.set(key, association)
    }
  }

  return Array.from(byForeignKey.values()).map((association) => {
    const target = association.target
    const targetAttributes = target.rawAttributes ?? {}
    const labelAttribute = ['name', 'title', 'username', 'code', 'firstName']
      .find((attribute) => Object.prototype.hasOwnProperty.call(targetAttributes, attribute))
    const attributes = ['id', ...(labelAttribute ? [labelAttribute] : [])]

    return {
      model: target.schema(schema),
      as: association.as,
      attributes,
    }
  })
}

export class UserAlertsTypeService implements UserAlertsTypeController {
      public async listUserAlertsType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserAlertsTypeResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.user_alerts_type.schema(schema!);
      const include = getBelongsToIncludes(model, schema!);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await model.findAndCountAll({
        include,
        distinct: true,
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserAlertsTypeResponse[]>[],
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

      public async createUserAlertsType(app: FastifyInstance, input: UserAlertsTypeRequest, request?: FastifyRequest): Promise<UserAlertsTypeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.user_alerts_type.schema(schema!);
      const include = getBelongsToIncludes(model, schema!);
      const row = await models.user_alerts_type.schema(schema!).create(input as any)
      return row.get({ plain: true }) as UserAlertsTypeResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserAlertsTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<UserAlertsTypeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.user_alerts_type.schema(schema!);
      const include = getBelongsToIncludes(model, schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id, { include })
      if (!row) {
        throw new Error('user_alerts_type not found')
      }
      return row.get({ plain: true }) as UserAlertsTypeResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserAlertsType(app: FastifyInstance, input: UserAlertsTypeRequest, request?: FastifyRequest): Promise<UserAlertsTypeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.user_alerts_type.schema(schema!);
      const include = getBelongsToIncludes(model, schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id, { include })
      if (!row) {
        throw new Error('user_alerts_type not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserAlertsTypeResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserAlertsType(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.user_alerts_type.schema(schema!);
      const include = getBelongsToIncludes(model, schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.user_alerts_type.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
