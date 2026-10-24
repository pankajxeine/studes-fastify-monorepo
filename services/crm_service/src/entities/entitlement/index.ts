import type { Sequelize } from 'sequelize'
import { initEntitlementEntitlementOverrideEntity } from './entitlement_entitlement_override/entitlement_entitlement_override.entity'
import { initEntitlementEntitlementGrantEntity } from './entitlement_entitlement_grant/entitlement_entitlement_grant.entity'
import { initEntitlementEntitlementSnapshotEntity } from './entitlement_entitlement_snapshot/entitlement_entitlement_snapshot.entity'

export type GeneratedModels = {
  entitlement_entitlement_override: ReturnType<typeof initEntitlementEntitlementOverrideEntity>;
  entitlement_entitlement_grant: ReturnType<typeof initEntitlementEntitlementGrantEntity>;
  entitlement_entitlement_snapshot: ReturnType<typeof initEntitlementEntitlementSnapshotEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      entitlement_entitlement_override: initEntitlementEntitlementOverrideEntity(sequelize),
      entitlement_entitlement_grant: initEntitlementEntitlementGrantEntity(sequelize),
      entitlement_entitlement_snapshot: initEntitlementEntitlementSnapshotEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {

}
