import type { Sequelize } from 'sequelize'
import { initCommercePriceBookEntity } from './commerce_price_book/commerce_price_book.entity'
import { initCommercePlanEntity } from './commerce_plan/commerce_plan.entity'
import { initCommercePlanVersionEntity } from './commerce_plan_version/commerce_plan_version.entity'
import { initCommercePlanItemEntity } from './commerce_plan_item/commerce_plan_item.entity'
import { initCommercePlanPriceEntity } from './commerce_plan_price/commerce_plan_price.entity'
import { initCommerceAddonEntity } from './commerce_addon/commerce_addon.entity'
import { initCommerceAddonVersionEntity } from './commerce_addon_version/commerce_addon_version.entity'
import { initCommerceAddonItemEntity } from './commerce_addon_item/commerce_addon_item.entity'
import { initCommerceAddonPriceEntity } from './commerce_addon_price/commerce_addon_price.entity'
import { initCommercePlanAddonEntity } from './commerce_plan_addon/commerce_plan_addon.entity'
import { initCommerceCouponEntity } from './commerce_coupon/commerce_coupon.entity'

export type GeneratedModels = {
  commerce_price_book: ReturnType<typeof initCommercePriceBookEntity>;
  commerce_plan: ReturnType<typeof initCommercePlanEntity>;
  commerce_plan_version: ReturnType<typeof initCommercePlanVersionEntity>;
  commerce_plan_item: ReturnType<typeof initCommercePlanItemEntity>;
  commerce_plan_price: ReturnType<typeof initCommercePlanPriceEntity>;
  commerce_addon: ReturnType<typeof initCommerceAddonEntity>;
  commerce_addon_version: ReturnType<typeof initCommerceAddonVersionEntity>;
  commerce_addon_item: ReturnType<typeof initCommerceAddonItemEntity>;
  commerce_addon_price: ReturnType<typeof initCommerceAddonPriceEntity>;
  commerce_plan_addon: ReturnType<typeof initCommercePlanAddonEntity>;
  commerce_coupon: ReturnType<typeof initCommerceCouponEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      commerce_price_book: initCommercePriceBookEntity(sequelize),
      commerce_plan: initCommercePlanEntity(sequelize),
      commerce_plan_version: initCommercePlanVersionEntity(sequelize),
      commerce_plan_item: initCommercePlanItemEntity(sequelize),
      commerce_plan_price: initCommercePlanPriceEntity(sequelize),
      commerce_addon: initCommerceAddonEntity(sequelize),
      commerce_addon_version: initCommerceAddonVersionEntity(sequelize),
      commerce_addon_item: initCommerceAddonItemEntity(sequelize),
      commerce_addon_price: initCommerceAddonPriceEntity(sequelize),
      commerce_plan_addon: initCommercePlanAddonEntity(sequelize),
      commerce_coupon: initCommerceCouponEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.commerce_plan_version.belongsTo(models.commerce_plan, { as: 'plan', foreignKey: 'planId', targetKey: 'planId' })
  models.commerce_plan.hasMany(models.commerce_plan_version, { as: 'commercePlanVersion', foreignKey: 'planId', sourceKey: 'planId' })
  models.commerce_plan_item.belongsTo(models.commerce_plan_version, { as: 'planVersion', foreignKey: 'planVersionId', targetKey: 'planVersionId', onDelete: 'CASCADE' })
  models.commerce_plan_version.hasMany(models.commerce_plan_item, { as: 'commercePlanItem', foreignKey: 'planVersionId', sourceKey: 'planVersionId', onDelete: 'CASCADE' })
  models.commerce_plan_price.belongsTo(models.commerce_plan_version, { as: 'planVersion', foreignKey: 'planVersionId', targetKey: 'planVersionId', onDelete: 'CASCADE' })
  models.commerce_plan_version.hasMany(models.commerce_plan_price, { as: 'commercePlanPrice', foreignKey: 'planVersionId', sourceKey: 'planVersionId', onDelete: 'CASCADE' })
  models.commerce_plan_price.belongsTo(models.commerce_price_book, { as: 'priceBook', foreignKey: 'priceBookId', targetKey: 'priceBookId' })
  models.commerce_price_book.hasMany(models.commerce_plan_price, { as: 'commercePlanPrice', foreignKey: 'priceBookId', sourceKey: 'priceBookId' })
  models.commerce_addon_version.belongsTo(models.commerce_addon, { as: 'addon', foreignKey: 'addonId', targetKey: 'addonId' })
  models.commerce_addon.hasMany(models.commerce_addon_version, { as: 'commerceAddonVersion', foreignKey: 'addonId', sourceKey: 'addonId' })
  models.commerce_addon_item.belongsTo(models.commerce_addon_version, { as: 'addonVersion', foreignKey: 'addonVersionId', targetKey: 'addonVersionId', onDelete: 'CASCADE' })
  models.commerce_addon_version.hasMany(models.commerce_addon_item, { as: 'commerceAddonItem', foreignKey: 'addonVersionId', sourceKey: 'addonVersionId', onDelete: 'CASCADE' })
  models.commerce_addon_price.belongsTo(models.commerce_addon_version, { as: 'addonVersion', foreignKey: 'addonVersionId', targetKey: 'addonVersionId', onDelete: 'CASCADE' })
  models.commerce_addon_version.hasMany(models.commerce_addon_price, { as: 'commerceAddonPrice', foreignKey: 'addonVersionId', sourceKey: 'addonVersionId', onDelete: 'CASCADE' })
  models.commerce_addon_price.belongsTo(models.commerce_price_book, { as: 'priceBook', foreignKey: 'priceBookId', targetKey: 'priceBookId' })
  models.commerce_price_book.hasMany(models.commerce_addon_price, { as: 'commerceAddonPrice', foreignKey: 'priceBookId', sourceKey: 'priceBookId' })
  models.commerce_plan_addon.belongsTo(models.commerce_plan_version, { as: 'planVersion', foreignKey: 'planVersionId', targetKey: 'planVersionId', onDelete: 'CASCADE' })
  models.commerce_plan_version.hasMany(models.commerce_plan_addon, { as: 'commercePlanAddon', foreignKey: 'planVersionId', sourceKey: 'planVersionId', onDelete: 'CASCADE' })
  models.commerce_plan_addon.belongsTo(models.commerce_addon, { as: 'addon', foreignKey: 'addonId', targetKey: 'addonId' })
  models.commerce_addon.hasMany(models.commerce_plan_addon, { as: 'commercePlanAddon', foreignKey: 'addonId', sourceKey: 'addonId' })
}
