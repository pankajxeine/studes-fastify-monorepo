import type { AgentHierarchyRequest } from './types/AgentHierarchyRequest'
import type { AgentHierarchyUpdateRequest } from './types/AgentHierarchyUpdateRequest'
import type { AgentHierarchyResponse } from './types/AgentHierarchyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AgentHierarchyController } from './AgentHierarchyController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class AgentHierarchyService implements AgentHierarchyController {
      public async listAgentHierarchy(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AgentHierarchyResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.partner_agent_hierarchy.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<AgentHierarchyResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createAgentHierarchy(app: FastifyInstance, input: AgentHierarchyRequest, request?: FastifyRequest): Promise<AgentHierarchyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.partner_agent_hierarchy.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<AgentHierarchyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAgentHierarchyById(app: FastifyInstance, request?: FastifyRequest): Promise<AgentHierarchyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.partner_agent_hierarchy.schema(schema!);
      const { agent_hierarchy_id } = (request?.params ?? {}) as { agent_hierarchy_id?: string | number }
      if (agent_hierarchy_id === undefined || agent_hierarchy_id === '') throw httpError(400, 'agent_hierarchy_id is required')
      const row = await model.findByPk(agent_hierarchy_id)
      if (!row) {
        throw httpError(404, 'partner_agent_hierarchy not found')
      }
      return toApiAttributes<AgentHierarchyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAgentHierarchy(app: FastifyInstance, input: AgentHierarchyUpdateRequest, request?: FastifyRequest): Promise<AgentHierarchyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.partner_agent_hierarchy.schema(schema!);
      const { agent_hierarchy_id } = (request?.params ?? {}) as { agent_hierarchy_id?: string | number }
      if (agent_hierarchy_id === undefined || agent_hierarchy_id === '') throw httpError(400, 'agent_hierarchy_id is required')
      const row = await model.findByPk(agent_hierarchy_id)
      if (!row) {
        throw httpError(404, 'partner_agent_hierarchy not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<AgentHierarchyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAgentHierarchy(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.partner_agent_hierarchy.schema(schema!);
      const { agent_hierarchy_id } = (request?.params ?? {}) as { agent_hierarchy_id?: string | number }
      if (agent_hierarchy_id === undefined || agent_hierarchy_id === '') throw httpError(400, 'agent_hierarchy_id is required')
      const deletedCount = await model.destroy({ where: { agentHierarchyId: agent_hierarchy_id } })
      if (deletedCount === 0) throw httpError(404, 'partner_agent_hierarchy not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
