import type { TeamRequest } from './types/TeamRequest'
import type { TeamUpdateRequest } from './types/TeamUpdateRequest'
import type { TeamResponse } from './types/TeamResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TeamController } from './TeamController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TeamService implements TeamController {
      public async listTeam(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TeamResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_team.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TeamResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTeam(app: FastifyInstance, input: TeamRequest, request?: FastifyRequest): Promise<TeamResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_team.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TeamResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTeamById(app: FastifyInstance, request?: FastifyRequest): Promise<TeamResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_team.schema(schema!);
      const { team_id } = (request?.params ?? {}) as { team_id?: string | number }
      if (team_id === undefined || team_id === '') throw httpError(400, 'team_id is required')
      const row = await model.findByPk(team_id)
      if (!row) {
        throw httpError(404, 'org_team not found')
      }
      return toApiAttributes<TeamResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTeam(app: FastifyInstance, input: TeamUpdateRequest, request?: FastifyRequest): Promise<TeamResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_team.schema(schema!);
      const { team_id } = (request?.params ?? {}) as { team_id?: string | number }
      if (team_id === undefined || team_id === '') throw httpError(400, 'team_id is required')
      const row = await model.findByPk(team_id)
      if (!row) {
        throw httpError(404, 'org_team not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TeamResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTeam(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.org_team.schema(schema!);
      const { team_id } = (request?.params ?? {}) as { team_id?: string | number }
      if (team_id === undefined || team_id === '') throw httpError(400, 'team_id is required')
      const deletedCount = await model.destroy({ where: { teamId: team_id } })
      if (deletedCount === 0) throw httpError(404, 'org_team not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
