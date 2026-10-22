import type { FastifyInstance } from 'fastify'
import type { Sequelize } from 'sequelize'
import { initGeneratedEntities as initCpanelEntities, type GeneratedModels as CpanelModels } from './cpanel'

export type GeneratedEntityDecorations = {
  cpanelModels: CpanelModels
}

export function registerGeneratedEntityDecorators(app: FastifyInstance, sequelize: Sequelize): GeneratedEntityDecorations {
  app.decorate('cpanelModels', initCpanelEntities(sequelize).models)

  return {
    cpanelModels: app.cpanelModels
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    cpanelModels: CpanelModels
  }
}
