import type { FastifyInstance } from 'fastify'
import type { Sequelize } from 'sequelize'
import { initGeneratedEntities as initCpanelEntities, type GeneratedModels as CpanelModels } from './cpanel'
import { initGeneratedEntities as initCpanelRouterEntities, type GeneratedModels as CpanelRouterModels } from './cpanel_router'

export type GeneratedEntityDecorations = {
  cpanelModels: CpanelModels
  cpanelRouterModels: CpanelRouterModels
}

export function registerGeneratedEntityDecorators(app: FastifyInstance, sequelize: Sequelize): GeneratedEntityDecorations {
  app.decorate('cpanelModels', initCpanelEntities(sequelize).models)
  app.decorate('cpanelRouterModels', initCpanelRouterEntities(sequelize).models)

  return {
    cpanelModels: app.cpanelModels,
    cpanelRouterModels: app.cpanelRouterModels
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    cpanelModels: CpanelModels
    cpanelRouterModels: CpanelRouterModels
  }
}
