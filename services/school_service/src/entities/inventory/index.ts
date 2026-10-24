import type { Sequelize } from 'sequelize'
import { initInvntItemCategoryEntity } from './invnt_item_category/invnt_item_category.entity'
import { initInvntItemEntity } from './invnt_item/invnt_item.entity'
import { initInvntPurchaseOrderEntity } from './invnt_purchase_order/invnt_purchase_order.entity'
import { initInvntPurchaseOrderLineEntity } from './invnt_purchase_order_line/invnt_purchase_order_line.entity'
import { initInvntStockTransactionEntity } from './invnt_stock_transaction/invnt_stock_transaction.entity'
import { initInvntAssetEntity } from './invnt_asset/invnt_asset.entity'
import { initInvntAssetMaintenanceEntity } from './invnt_asset_maintenance/invnt_asset_maintenance.entity'

export type GeneratedModels = {
  invnt_item_category: ReturnType<typeof initInvntItemCategoryEntity>;
  invnt_item: ReturnType<typeof initInvntItemEntity>;
  invnt_purchase_order: ReturnType<typeof initInvntPurchaseOrderEntity>;
  invnt_purchase_order_line: ReturnType<typeof initInvntPurchaseOrderLineEntity>;
  invnt_stock_transaction: ReturnType<typeof initInvntStockTransactionEntity>;
  invnt_asset: ReturnType<typeof initInvntAssetEntity>;
  invnt_asset_maintenance: ReturnType<typeof initInvntAssetMaintenanceEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      invnt_item_category: initInvntItemCategoryEntity(sequelize),
      invnt_item: initInvntItemEntity(sequelize),
      invnt_purchase_order: initInvntPurchaseOrderEntity(sequelize),
      invnt_purchase_order_line: initInvntPurchaseOrderLineEntity(sequelize),
      invnt_stock_transaction: initInvntStockTransactionEntity(sequelize),
      invnt_asset: initInvntAssetEntity(sequelize),
      invnt_asset_maintenance: initInvntAssetMaintenanceEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.invnt_item.belongsTo(models.invnt_item_category, { as: 'itemCategoryCode', foreignKey: 'itemCategoryCode', targetKey: 'itemCategoryCode', onUpdate: 'CASCADE' })
  models.invnt_item_category.hasMany(models.invnt_item, { as: 'invntItem', foreignKey: 'itemCategoryCode', sourceKey: 'itemCategoryCode', onUpdate: 'CASCADE' })
  models.invnt_purchase_order_line.belongsTo(models.invnt_purchase_order, { as: 'purchaseOrder', foreignKey: 'purchaseOrderId', targetKey: 'purchaseOrderId', onDelete: 'CASCADE' })
  models.invnt_purchase_order.hasMany(models.invnt_purchase_order_line, { as: 'invntPurchaseOrderLine', foreignKey: 'purchaseOrderId', sourceKey: 'purchaseOrderId', onDelete: 'CASCADE' })
  models.invnt_purchase_order_line.belongsTo(models.invnt_item, { as: 'item', foreignKey: 'itemId', targetKey: 'itemId' })
  models.invnt_item.hasMany(models.invnt_purchase_order_line, { as: 'invntPurchaseOrderLine', foreignKey: 'itemId', sourceKey: 'itemId' })
  models.invnt_stock_transaction.belongsTo(models.invnt_item, { as: 'item', foreignKey: 'itemId', targetKey: 'itemId' })
  models.invnt_item.hasMany(models.invnt_stock_transaction, { as: 'invntStockTransaction', foreignKey: 'itemId', sourceKey: 'itemId' })
  models.invnt_stock_transaction.belongsTo(models.invnt_purchase_order_line, { as: 'purchaseOrderLine', foreignKey: 'purchaseOrderLineId', targetKey: 'purchaseOrderLineId' })
  models.invnt_purchase_order_line.hasMany(models.invnt_stock_transaction, { as: 'invntStockTransaction', foreignKey: 'purchaseOrderLineId', sourceKey: 'purchaseOrderLineId' })
  models.invnt_asset.belongsTo(models.invnt_item, { as: 'item', foreignKey: 'itemId', targetKey: 'itemId' })
  models.invnt_item.hasMany(models.invnt_asset, { as: 'invntAsset', foreignKey: 'itemId', sourceKey: 'itemId' })
  models.invnt_asset.belongsTo(models.invnt_purchase_order_line, { as: 'purchaseOrderLine', foreignKey: 'purchaseOrderLineId', targetKey: 'purchaseOrderLineId' })
  models.invnt_purchase_order_line.hasMany(models.invnt_asset, { as: 'invntAsset', foreignKey: 'purchaseOrderLineId', sourceKey: 'purchaseOrderLineId' })
  models.invnt_asset_maintenance.belongsTo(models.invnt_asset, { as: 'asset', foreignKey: 'assetId', targetKey: 'assetId' })
  models.invnt_asset.hasMany(models.invnt_asset_maintenance, { as: 'invntAssetMaintenance', foreignKey: 'assetId', sourceKey: 'assetId' })
}
