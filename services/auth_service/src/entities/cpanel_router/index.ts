import type { Sequelize } from 'sequelize'
import { initCpanelsEntity } from './cpanels/cpanels.entity'
import { initCrmsEntity } from './crms/crms.entity'
import { initMasterPasswordsEntity } from './master_passwords/master_passwords.entity'
import { initMigrationDetailsEntity } from './migration_details/migration_details.entity'
import { initSitesEntity } from './sites/sites.entity'
import { initSkeletonDetailsEntity } from './skeleton_details/skeleton_details.entity'

export function initGeneratedEntities(sequelize: Sequelize): void {
  initCpanelsEntity(sequelize)
  initCrmsEntity(sequelize)
  initMasterPasswordsEntity(sequelize)
  initMigrationDetailsEntity(sequelize)
  initSitesEntity(sequelize)
  initSkeletonDetailsEntity(sequelize)
}
