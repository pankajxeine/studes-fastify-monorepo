import type { Sequelize } from 'sequelize'
import { initSysStateTransitionEntity } from './sys_state_transition/sys_state_transition.entity'
import { initIFEntity } from './IF/IF.entity'

export type GeneratedModels = {
  sys_state_transition: ReturnType<typeof initSysStateTransitionEntity>;
  IF: ReturnType<typeof initIFEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      sys_state_transition: initSysStateTransitionEntity(sequelize),
      IF: initIFEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {

}
