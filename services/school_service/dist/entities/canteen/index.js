"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const cntn_meal_period_entity_1 = require("./cntn_meal_period/cntn_meal_period.entity");
const cntn_menu_category_entity_1 = require("./cntn_menu_category/cntn_menu_category.entity");
const cntn_allergen_entity_1 = require("./cntn_allergen/cntn_allergen.entity");
const cntn_canteen_outlet_entity_1 = require("./cntn_canteen_outlet/cntn_canteen_outlet.entity");
const cntn_canteen_staff_assignment_entity_1 = require("./cntn_canteen_staff_assignment/cntn_canteen_staff_assignment.entity");
const cntn_menu_item_entity_1 = require("./cntn_menu_item/cntn_menu_item.entity");
const cntn_menu_item_allergen_entity_1 = require("./cntn_menu_item_allergen/cntn_menu_item_allergen.entity");
const cntn_person_allergen_entity_1 = require("./cntn_person_allergen/cntn_person_allergen.entity");
const cntn_weekly_menu_entity_1 = require("./cntn_weekly_menu/cntn_weekly_menu.entity");
const cntn_weekly_menu_item_entity_1 = require("./cntn_weekly_menu_item/cntn_weekly_menu_item.entity");
const cntn_daily_menu_entity_1 = require("./cntn_daily_menu/cntn_daily_menu.entity");
const cntn_daily_menu_item_entity_1 = require("./cntn_daily_menu_item/cntn_daily_menu_item.entity");
const cntn_meal_plan_entity_1 = require("./cntn_meal_plan/cntn_meal_plan.entity");
const cntn_meal_plan_period_entity_1 = require("./cntn_meal_plan_period/cntn_meal_plan_period.entity");
const cntn_meal_subscription_entity_1 = require("./cntn_meal_subscription/cntn_meal_subscription.entity");
const cntn_wallet_entity_1 = require("./cntn_wallet/cntn_wallet.entity");
const cntn_canteen_order_entity_1 = require("./cntn_canteen_order/cntn_canteen_order.entity");
const cntn_canteen_order_line_entity_1 = require("./cntn_canteen_order_line/cntn_canteen_order_line.entity");
const cntn_canteen_order_status_history_entity_1 = require("./cntn_canteen_order_status_history/cntn_canteen_order_status_history.entity");
const cntn_wallet_transaction_entity_1 = require("./cntn_wallet_transaction/cntn_wallet_transaction.entity");
function createGeneratedModels(sequelize) {
    const models = {
        cntn_meal_period: (0, cntn_meal_period_entity_1.initCntnMealPeriodEntity)(sequelize),
        cntn_menu_category: (0, cntn_menu_category_entity_1.initCntnMenuCategoryEntity)(sequelize),
        cntn_allergen: (0, cntn_allergen_entity_1.initCntnAllergenEntity)(sequelize),
        cntn_canteen_outlet: (0, cntn_canteen_outlet_entity_1.initCntnCanteenOutletEntity)(sequelize),
        cntn_canteen_staff_assignment: (0, cntn_canteen_staff_assignment_entity_1.initCntnCanteenStaffAssignmentEntity)(sequelize),
        cntn_menu_item: (0, cntn_menu_item_entity_1.initCntnMenuItemEntity)(sequelize),
        cntn_menu_item_allergen: (0, cntn_menu_item_allergen_entity_1.initCntnMenuItemAllergenEntity)(sequelize),
        cntn_person_allergen: (0, cntn_person_allergen_entity_1.initCntnPersonAllergenEntity)(sequelize),
        cntn_weekly_menu: (0, cntn_weekly_menu_entity_1.initCntnWeeklyMenuEntity)(sequelize),
        cntn_weekly_menu_item: (0, cntn_weekly_menu_item_entity_1.initCntnWeeklyMenuItemEntity)(sequelize),
        cntn_daily_menu: (0, cntn_daily_menu_entity_1.initCntnDailyMenuEntity)(sequelize),
        cntn_daily_menu_item: (0, cntn_daily_menu_item_entity_1.initCntnDailyMenuItemEntity)(sequelize),
        cntn_meal_plan: (0, cntn_meal_plan_entity_1.initCntnMealPlanEntity)(sequelize),
        cntn_meal_plan_period: (0, cntn_meal_plan_period_entity_1.initCntnMealPlanPeriodEntity)(sequelize),
        cntn_meal_subscription: (0, cntn_meal_subscription_entity_1.initCntnMealSubscriptionEntity)(sequelize),
        cntn_wallet: (0, cntn_wallet_entity_1.initCntnWalletEntity)(sequelize),
        cntn_canteen_order: (0, cntn_canteen_order_entity_1.initCntnCanteenOrderEntity)(sequelize),
        cntn_canteen_order_line: (0, cntn_canteen_order_line_entity_1.initCntnCanteenOrderLineEntity)(sequelize),
        cntn_canteen_order_status_history: (0, cntn_canteen_order_status_history_entity_1.initCntnCanteenOrderStatusHistoryEntity)(sequelize),
        cntn_wallet_transaction: (0, cntn_wallet_transaction_entity_1.initCntnWalletTransactionEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.cntn_canteen_staff_assignment.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' });
    models.cntn_canteen_outlet.hasMany(models.cntn_canteen_staff_assignment, { as: 'cntnCanteenStaffAssignment', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' });
    models.cntn_menu_item.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' });
    models.cntn_canteen_outlet.hasMany(models.cntn_menu_item, { as: 'cntnMenuItem', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' });
    models.cntn_menu_item.belongsTo(models.cntn_menu_category, { as: 'menuCategoryCode', foreignKey: 'menuCategoryCode', targetKey: 'menuCategoryCode', onUpdate: 'CASCADE' });
    models.cntn_menu_category.hasMany(models.cntn_menu_item, { as: 'cntnMenuItem', foreignKey: 'menuCategoryCode', sourceKey: 'menuCategoryCode', onUpdate: 'CASCADE' });
    models.cntn_menu_item_allergen.belongsTo(models.cntn_menu_item, { as: 'menuItem', foreignKey: 'menuItemId', targetKey: 'menuItemId', onDelete: 'CASCADE' });
    models.cntn_menu_item.hasMany(models.cntn_menu_item_allergen, { as: 'cntnMenuItemAllergen', foreignKey: 'menuItemId', sourceKey: 'menuItemId', onDelete: 'CASCADE' });
    models.cntn_menu_item_allergen.belongsTo(models.cntn_allergen, { as: 'allergenCode', foreignKey: 'allergenCode', targetKey: 'allergenCode', onUpdate: 'CASCADE' });
    models.cntn_allergen.hasMany(models.cntn_menu_item_allergen, { as: 'cntnMenuItemAllergen', foreignKey: 'allergenCode', sourceKey: 'allergenCode', onUpdate: 'CASCADE' });
    models.cntn_person_allergen.belongsTo(models.cntn_allergen, { as: 'allergenCode', foreignKey: 'allergenCode', targetKey: 'allergenCode', onUpdate: 'CASCADE' });
    models.cntn_allergen.hasMany(models.cntn_person_allergen, { as: 'cntnPersonAllergen', foreignKey: 'allergenCode', sourceKey: 'allergenCode', onUpdate: 'CASCADE' });
    models.cntn_weekly_menu.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' });
    models.cntn_canteen_outlet.hasMany(models.cntn_weekly_menu, { as: 'cntnWeeklyMenu', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' });
    models.cntn_weekly_menu_item.belongsTo(models.cntn_meal_period, { as: 'mealPeriodCode', foreignKey: 'mealPeriodCode', targetKey: 'mealPeriodCode', onUpdate: 'CASCADE' });
    models.cntn_meal_period.hasMany(models.cntn_weekly_menu_item, { as: 'cntnWeeklyMenuItem', foreignKey: 'mealPeriodCode', sourceKey: 'mealPeriodCode', onUpdate: 'CASCADE' });
    models.cntn_weekly_menu_item.belongsTo(models.cntn_weekly_menu, { as: 'weeklyMenu', foreignKey: 'weeklyMenuId', targetKey: 'weeklyMenuId', onDelete: 'CASCADE' });
    models.cntn_weekly_menu.hasMany(models.cntn_weekly_menu_item, { as: 'cntnWeeklyMenuItem', foreignKey: 'weeklyMenuId', sourceKey: 'weeklyMenuId', onDelete: 'CASCADE' });
    models.cntn_weekly_menu_item.belongsTo(models.cntn_menu_item, { as: 'menuItem', foreignKey: 'menuItemId', targetKey: 'menuItemId' });
    models.cntn_menu_item.hasMany(models.cntn_weekly_menu_item, { as: 'cntnWeeklyMenuItem', foreignKey: 'menuItemId', sourceKey: 'menuItemId' });
    models.cntn_daily_menu.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' });
    models.cntn_canteen_outlet.hasMany(models.cntn_daily_menu, { as: 'cntnDailyMenu', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' });
    models.cntn_daily_menu.belongsTo(models.cntn_meal_period, { as: 'mealPeriodCode', foreignKey: 'mealPeriodCode', targetKey: 'mealPeriodCode', onUpdate: 'CASCADE' });
    models.cntn_meal_period.hasMany(models.cntn_daily_menu, { as: 'cntnDailyMenu', foreignKey: 'mealPeriodCode', sourceKey: 'mealPeriodCode', onUpdate: 'CASCADE' });
    models.cntn_daily_menu.belongsTo(models.cntn_weekly_menu, { as: 'weeklyMenu', foreignKey: 'weeklyMenuId', targetKey: 'weeklyMenuId' });
    models.cntn_weekly_menu.hasMany(models.cntn_daily_menu, { as: 'cntnDailyMenu', foreignKey: 'weeklyMenuId', sourceKey: 'weeklyMenuId' });
    models.cntn_daily_menu_item.belongsTo(models.cntn_daily_menu, { as: 'dailyMenu', foreignKey: 'dailyMenuId', targetKey: 'dailyMenuId', onDelete: 'CASCADE' });
    models.cntn_daily_menu.hasMany(models.cntn_daily_menu_item, { as: 'cntnDailyMenuItem', foreignKey: 'dailyMenuId', sourceKey: 'dailyMenuId', onDelete: 'CASCADE' });
    models.cntn_daily_menu_item.belongsTo(models.cntn_menu_item, { as: 'menuItem', foreignKey: 'menuItemId', targetKey: 'menuItemId' });
    models.cntn_menu_item.hasMany(models.cntn_daily_menu_item, { as: 'cntnDailyMenuItem', foreignKey: 'menuItemId', sourceKey: 'menuItemId' });
    models.cntn_meal_plan.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' });
    models.cntn_canteen_outlet.hasMany(models.cntn_meal_plan, { as: 'cntnMealPlan', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' });
    models.cntn_meal_plan_period.belongsTo(models.cntn_meal_plan, { as: 'mealPlan', foreignKey: 'mealPlanId', targetKey: 'mealPlanId', onDelete: 'CASCADE' });
    models.cntn_meal_plan.hasMany(models.cntn_meal_plan_period, { as: 'cntnMealPlanPeriod', foreignKey: 'mealPlanId', sourceKey: 'mealPlanId', onDelete: 'CASCADE' });
    models.cntn_meal_plan_period.belongsTo(models.cntn_meal_period, { as: 'mealPeriodCode', foreignKey: 'mealPeriodCode', targetKey: 'mealPeriodCode', onUpdate: 'CASCADE' });
    models.cntn_meal_period.hasMany(models.cntn_meal_plan_period, { as: 'cntnMealPlanPeriod', foreignKey: 'mealPeriodCode', sourceKey: 'mealPeriodCode', onUpdate: 'CASCADE' });
    models.cntn_meal_subscription.belongsTo(models.cntn_meal_plan, { as: 'mealPlan', foreignKey: 'mealPlanId', targetKey: 'mealPlanId' });
    models.cntn_meal_plan.hasMany(models.cntn_meal_subscription, { as: 'cntnMealSubscription', foreignKey: 'mealPlanId', sourceKey: 'mealPlanId' });
    models.cntn_canteen_order.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' });
    models.cntn_canteen_outlet.hasMany(models.cntn_canteen_order, { as: 'cntnCanteenOrder', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' });
    models.cntn_canteen_order.belongsTo(models.cntn_daily_menu, { as: 'dailyMenu', foreignKey: 'dailyMenuId', targetKey: 'dailyMenuId' });
    models.cntn_daily_menu.hasMany(models.cntn_canteen_order, { as: 'cntnCanteenOrder', foreignKey: 'dailyMenuId', sourceKey: 'dailyMenuId' });
    models.cntn_canteen_order.belongsTo(models.cntn_wallet, { as: 'wallet', foreignKey: 'walletId', targetKey: 'walletId' });
    models.cntn_wallet.hasMany(models.cntn_canteen_order, { as: 'cntnCanteenOrder', foreignKey: 'walletId', sourceKey: 'walletId' });
    models.cntn_canteen_order.belongsTo(models.cntn_meal_subscription, { as: 'mealSubscription', foreignKey: 'mealSubscriptionId', targetKey: 'mealSubscriptionId' });
    models.cntn_meal_subscription.hasMany(models.cntn_canteen_order, { as: 'cntnCanteenOrder', foreignKey: 'mealSubscriptionId', sourceKey: 'mealSubscriptionId' });
    models.cntn_canteen_order_line.belongsTo(models.cntn_canteen_order, { as: 'canteenOrder', foreignKey: 'canteenOrderId', targetKey: 'canteenOrderId', onDelete: 'CASCADE' });
    models.cntn_canteen_order.hasMany(models.cntn_canteen_order_line, { as: 'cntnCanteenOrderLine', foreignKey: 'canteenOrderId', sourceKey: 'canteenOrderId', onDelete: 'CASCADE' });
    models.cntn_canteen_order_line.belongsTo(models.cntn_menu_item, { as: 'menuItem', foreignKey: 'menuItemId', targetKey: 'menuItemId' });
    models.cntn_menu_item.hasMany(models.cntn_canteen_order_line, { as: 'cntnCanteenOrderLine', foreignKey: 'menuItemId', sourceKey: 'menuItemId' });
    models.cntn_canteen_order_status_history.belongsTo(models.cntn_canteen_order, { as: 'canteenOrder', foreignKey: 'canteenOrderId', targetKey: 'canteenOrderId', onDelete: 'CASCADE' });
    models.cntn_canteen_order.hasMany(models.cntn_canteen_order_status_history, { as: 'cntnCanteenOrderStatusHistory', foreignKey: 'canteenOrderId', sourceKey: 'canteenOrderId', onDelete: 'CASCADE' });
    models.cntn_wallet_transaction.belongsTo(models.cntn_wallet, { as: 'wallet', foreignKey: 'walletId', targetKey: 'walletId' });
    models.cntn_wallet.hasMany(models.cntn_wallet_transaction, { as: 'cntnWalletTransaction', foreignKey: 'walletId', sourceKey: 'walletId' });
    models.cntn_wallet_transaction.belongsTo(models.cntn_wallet_transaction, { as: 'reversesWalletTransaction', foreignKey: 'reversesWalletTransactionId', targetKey: 'walletTransactionId' });
    models.cntn_wallet_transaction.hasMany(models.cntn_wallet_transaction, { as: 'cntnWalletTransaction', foreignKey: 'reversesWalletTransactionId', sourceKey: 'walletTransactionId' });
    models.cntn_wallet_transaction.belongsTo(models.cntn_canteen_order, { as: 'canteenOrder', foreignKey: 'canteenOrderId', targetKey: 'canteenOrderId' });
    models.cntn_canteen_order.hasMany(models.cntn_wallet_transaction, { as: 'cntnWalletTransaction', foreignKey: 'canteenOrderId', sourceKey: 'canteenOrderId' });
}
