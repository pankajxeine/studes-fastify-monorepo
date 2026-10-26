"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const invnt_item_category_entity_1 = require("./invnt_item_category/invnt_item_category.entity");
const invnt_item_entity_1 = require("./invnt_item/invnt_item.entity");
const invnt_purchase_order_entity_1 = require("./invnt_purchase_order/invnt_purchase_order.entity");
const invnt_purchase_order_line_entity_1 = require("./invnt_purchase_order_line/invnt_purchase_order_line.entity");
const invnt_stock_transaction_entity_1 = require("./invnt_stock_transaction/invnt_stock_transaction.entity");
const invnt_asset_entity_1 = require("./invnt_asset/invnt_asset.entity");
const invnt_asset_maintenance_entity_1 = require("./invnt_asset_maintenance/invnt_asset_maintenance.entity");
function createGeneratedModels(sequelize) {
    const models = {
        invnt_item_category: (0, invnt_item_category_entity_1.initInvntItemCategoryEntity)(sequelize),
        invnt_item: (0, invnt_item_entity_1.initInvntItemEntity)(sequelize),
        invnt_purchase_order: (0, invnt_purchase_order_entity_1.initInvntPurchaseOrderEntity)(sequelize),
        invnt_purchase_order_line: (0, invnt_purchase_order_line_entity_1.initInvntPurchaseOrderLineEntity)(sequelize),
        invnt_stock_transaction: (0, invnt_stock_transaction_entity_1.initInvntStockTransactionEntity)(sequelize),
        invnt_asset: (0, invnt_asset_entity_1.initInvntAssetEntity)(sequelize),
        invnt_asset_maintenance: (0, invnt_asset_maintenance_entity_1.initInvntAssetMaintenanceEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.invnt_item.belongsTo(models.invnt_item_category, { as: 'itemCategoryCode', foreignKey: 'itemCategoryCode', targetKey: 'itemCategoryCode', onUpdate: 'CASCADE' });
    models.invnt_item_category.hasMany(models.invnt_item, { as: 'invntItem', foreignKey: 'itemCategoryCode', sourceKey: 'itemCategoryCode', onUpdate: 'CASCADE' });
    models.invnt_purchase_order_line.belongsTo(models.invnt_purchase_order, { as: 'purchaseOrder', foreignKey: 'purchaseOrderId', targetKey: 'purchaseOrderId', onDelete: 'CASCADE' });
    models.invnt_purchase_order.hasMany(models.invnt_purchase_order_line, { as: 'invntPurchaseOrderLine', foreignKey: 'purchaseOrderId', sourceKey: 'purchaseOrderId', onDelete: 'CASCADE' });
    models.invnt_purchase_order_line.belongsTo(models.invnt_item, { as: 'item', foreignKey: 'itemId', targetKey: 'itemId' });
    models.invnt_item.hasMany(models.invnt_purchase_order_line, { as: 'invntPurchaseOrderLine', foreignKey: 'itemId', sourceKey: 'itemId' });
    models.invnt_stock_transaction.belongsTo(models.invnt_item, { as: 'item', foreignKey: 'itemId', targetKey: 'itemId' });
    models.invnt_item.hasMany(models.invnt_stock_transaction, { as: 'invntStockTransaction', foreignKey: 'itemId', sourceKey: 'itemId' });
    models.invnt_stock_transaction.belongsTo(models.invnt_purchase_order_line, { as: 'purchaseOrderLine', foreignKey: 'purchaseOrderLineId', targetKey: 'purchaseOrderLineId' });
    models.invnt_purchase_order_line.hasMany(models.invnt_stock_transaction, { as: 'invntStockTransaction', foreignKey: 'purchaseOrderLineId', sourceKey: 'purchaseOrderLineId' });
    models.invnt_asset.belongsTo(models.invnt_item, { as: 'item', foreignKey: 'itemId', targetKey: 'itemId' });
    models.invnt_item.hasMany(models.invnt_asset, { as: 'invntAsset', foreignKey: 'itemId', sourceKey: 'itemId' });
    models.invnt_asset.belongsTo(models.invnt_purchase_order_line, { as: 'purchaseOrderLine', foreignKey: 'purchaseOrderLineId', targetKey: 'purchaseOrderLineId' });
    models.invnt_purchase_order_line.hasMany(models.invnt_asset, { as: 'invntAsset', foreignKey: 'purchaseOrderLineId', sourceKey: 'purchaseOrderLineId' });
    models.invnt_asset_maintenance.belongsTo(models.invnt_asset, { as: 'asset', foreignKey: 'assetId', targetKey: 'assetId' });
    models.invnt_asset.hasMany(models.invnt_asset_maintenance, { as: 'invntAssetMaintenance', foreignKey: 'assetId', sourceKey: 'assetId' });
}
