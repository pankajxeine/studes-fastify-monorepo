import type { AgentPlanAssignmentRequest } from './types/AgentPlanAssignmentRequest'
import type { AgentPlanAssignmentUpdateRequest } from './types/AgentPlanAssignmentUpdateRequest'
import type { AgentPlanAssignmentResponse } from './types/AgentPlanAssignmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AgentPlanAssignmentController } from './AgentPlanAssignmentController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class AgentPlanAssignmentService implements AgentPlanAssignmentController {
      public async listAgentPlanAssignment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AgentPlanAssignmentResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_agent_plan_assignment.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<AgentPlanAssignmentResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createAgentPlanAssignment(app: FastifyInstance, input: AgentPlanAssignmentRequest, request?: FastifyRequest): Promise<AgentPlanAssignmentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_agent_plan_assignment.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<AgentPlanAssignmentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAgentPlanAssignmentById(app: FastifyInstance, request?: FastifyRequest): Promise<AgentPlanAssignmentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_agent_plan_assignment.schema(schema!);
      const { agent_plan_assignment_id } = (request?.params ?? {}) as { agent_plan_assignment_id?: string | number }
      if (agent_plan_assignment_id === undefined || agent_plan_assignment_id === '') throw httpError(400, 'agent_plan_assignment_id is required')
      const row = await model.findByPk(agent_plan_assignment_id)
      if (!row) {
        throw httpError(404, 'commission_agent_plan_assignment not found')
      }
      return toApiAttributes<AgentPlanAssignmentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAgentPlanAssignment(app: FastifyInstance, input: AgentPlanAssignmentUpdateRequest, request?: FastifyRequest): Promise<AgentPlanAssignmentResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_agent_plan_assignment.schema(schema!);
      const { agent_plan_assignment_id } = (request?.params ?? {}) as { agent_plan_assignment_id?: string | number }
      if (agent_plan_assignment_id === undefined || agent_plan_assignment_id === '') throw httpError(400, 'agent_plan_assignment_id is required')
      const row = await model.findByPk(agent_plan_assignment_id)
      if (!row) {
        throw httpError(404, 'commission_agent_plan_assignment not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<AgentPlanAssignmentResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAgentPlanAssignment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_agent_plan_assignment.schema(schema!);
      const { agent_plan_assignment_id } = (request?.params ?? {}) as { agent_plan_assignment_id?: string | number }
      if (agent_plan_assignment_id === undefined || agent_plan_assignment_id === '') throw httpError(400, 'agent_plan_assignment_id is required')
      const deletedCount = await model.destroy({ where: { agentPlanAssignmentId: agent_plan_assignment_id } })
      if (deletedCount === 0) throw httpError(404, 'commission_agent_plan_assignment not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
