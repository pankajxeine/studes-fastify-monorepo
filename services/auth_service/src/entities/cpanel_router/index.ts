import type { Sequelize } from 'sequelize'
import { initCpanelsEntity } from './cpanels/cpanels.entity'
import { initCrmsEntity } from './crms/crms.entity'
import { initMasterPasswordsEntity } from './master_passwords/master_passwords.entity'
import { initMigrationDetailsEntity } from './migration_details/migration_details.entity'
import { initSitesEntity } from './sites/sites.entity'
import { initSkeletonDetailsEntity } from './skeleton_details/skeleton_details.entity'

export type GeneratedModels = {
  cpanels: ReturnType<typeof initCpanelsEntity>;
  crms: ReturnType<typeof initCrmsEntity>;
  master_passwords: ReturnType<typeof initMasterPasswordsEntity>;
  migration_details: ReturnType<typeof initMigrationDetailsEntity>;
  sites: ReturnType<typeof initSitesEntity>;
  skeleton_details: ReturnType<typeof initSkeletonDetailsEntity>;
}

export function initGeneratedEntities(sequelize: Sequelize): { models: GeneratedModels } {
  return {
    models: {
      cpanels: initCpanelsEntity(sequelize),
      crms: initCrmsEntity(sequelize),
      master_passwords: initMasterPasswordsEntity(sequelize),
      migration_details: initMigrationDetailsEntity(sequelize),
      sites: initSitesEntity(sequelize),
      skeleton_details: initSkeletonDetailsEntity(sequelize)
    }
  }
}
