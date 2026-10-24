import type { Sequelize } from 'sequelize'
import { initCntnMealPeriodEntity } from './cntn_meal_period/cntn_meal_period.entity'
import { initCntnMenuCategoryEntity } from './cntn_menu_category/cntn_menu_category.entity'
import { initCntnAllergenEntity } from './cntn_allergen/cntn_allergen.entity'
import { initCntnCanteenOutletEntity } from './cntn_canteen_outlet/cntn_canteen_outlet.entity'
import { initCntnCanteenStaffAssignmentEntity } from './cntn_canteen_staff_assignment/cntn_canteen_staff_assignment.entity'
import { initCntnMenuItemEntity } from './cntn_menu_item/cntn_menu_item.entity'
import { initCntnMenuItemAllergenEntity } from './cntn_menu_item_allergen/cntn_menu_item_allergen.entity'
import { initCntnPersonAllergenEntity } from './cntn_person_allergen/cntn_person_allergen.entity'
import { initCntnWeeklyMenuEntity } from './cntn_weekly_menu/cntn_weekly_menu.entity'
import { initCntnWeeklyMenuItemEntity } from './cntn_weekly_menu_item/cntn_weekly_menu_item.entity'
import { initCntnDailyMenuEntity } from './cntn_daily_menu/cntn_daily_menu.entity'
import { initCntnDailyMenuItemEntity } from './cntn_daily_menu_item/cntn_daily_menu_item.entity'
import { initCntnMealPlanEntity } from './cntn_meal_plan/cntn_meal_plan.entity'
import { initCntnMealPlanPeriodEntity } from './cntn_meal_plan_period/cntn_meal_plan_period.entity'
import { initCntnMealSubscriptionEntity } from './cntn_meal_subscription/cntn_meal_subscription.entity'
import { initCntnWalletEntity } from './cntn_wallet/cntn_wallet.entity'
import { initCntnCanteenOrderEntity } from './cntn_canteen_order/cntn_canteen_order.entity'
import { initCntnCanteenOrderLineEntity } from './cntn_canteen_order_line/cntn_canteen_order_line.entity'
import { initCntnCanteenOrderStatusHistoryEntity } from './cntn_canteen_order_status_history/cntn_canteen_order_status_history.entity'
import { initCntnWalletTransactionEntity } from './cntn_wallet_transaction/cntn_wallet_transaction.entity'

export type GeneratedModels = {
  cntn_meal_period: ReturnType<typeof initCntnMealPeriodEntity>;
  cntn_menu_category: ReturnType<typeof initCntnMenuCategoryEntity>;
  cntn_allergen: ReturnType<typeof initCntnAllergenEntity>;
  cntn_canteen_outlet: ReturnType<typeof initCntnCanteenOutletEntity>;
  cntn_canteen_staff_assignment: ReturnType<typeof initCntnCanteenStaffAssignmentEntity>;
  cntn_menu_item: ReturnType<typeof initCntnMenuItemEntity>;
  cntn_menu_item_allergen: ReturnType<typeof initCntnMenuItemAllergenEntity>;
  cntn_person_allergen: ReturnType<typeof initCntnPersonAllergenEntity>;
  cntn_weekly_menu: ReturnType<typeof initCntnWeeklyMenuEntity>;
  cntn_weekly_menu_item: ReturnType<typeof initCntnWeeklyMenuItemEntity>;
  cntn_daily_menu: ReturnType<typeof initCntnDailyMenuEntity>;
  cntn_daily_menu_item: ReturnType<typeof initCntnDailyMenuItemEntity>;
  cntn_meal_plan: ReturnType<typeof initCntnMealPlanEntity>;
  cntn_meal_plan_period: ReturnType<typeof initCntnMealPlanPeriodEntity>;
  cntn_meal_subscription: ReturnType<typeof initCntnMealSubscriptionEntity>;
  cntn_wallet: ReturnType<typeof initCntnWalletEntity>;
  cntn_canteen_order: ReturnType<typeof initCntnCanteenOrderEntity>;
  cntn_canteen_order_line: ReturnType<typeof initCntnCanteenOrderLineEntity>;
  cntn_canteen_order_status_history: ReturnType<typeof initCntnCanteenOrderStatusHistoryEntity>;
  cntn_wallet_transaction: ReturnType<typeof initCntnWalletTransactionEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      cntn_meal_period: initCntnMealPeriodEntity(sequelize),
      cntn_menu_category: initCntnMenuCategoryEntity(sequelize),
      cntn_allergen: initCntnAllergenEntity(sequelize),
      cntn_canteen_outlet: initCntnCanteenOutletEntity(sequelize),
      cntn_canteen_staff_assignment: initCntnCanteenStaffAssignmentEntity(sequelize),
      cntn_menu_item: initCntnMenuItemEntity(sequelize),
      cntn_menu_item_allergen: initCntnMenuItemAllergenEntity(sequelize),
      cntn_person_allergen: initCntnPersonAllergenEntity(sequelize),
      cntn_weekly_menu: initCntnWeeklyMenuEntity(sequelize),
      cntn_weekly_menu_item: initCntnWeeklyMenuItemEntity(sequelize),
      cntn_daily_menu: initCntnDailyMenuEntity(sequelize),
      cntn_daily_menu_item: initCntnDailyMenuItemEntity(sequelize),
      cntn_meal_plan: initCntnMealPlanEntity(sequelize),
      cntn_meal_plan_period: initCntnMealPlanPeriodEntity(sequelize),
      cntn_meal_subscription: initCntnMealSubscriptionEntity(sequelize),
      cntn_wallet: initCntnWalletEntity(sequelize),
      cntn_canteen_order: initCntnCanteenOrderEntity(sequelize),
      cntn_canteen_order_line: initCntnCanteenOrderLineEntity(sequelize),
      cntn_canteen_order_status_history: initCntnCanteenOrderStatusHistoryEntity(sequelize),
      cntn_wallet_transaction: initCntnWalletTransactionEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.cntn_canteen_staff_assignment.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' })
  models.cntn_canteen_outlet.hasMany(models.cntn_canteen_staff_assignment, { as: 'cntnCanteenStaffAssignment', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' })
  models.cntn_menu_item.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' })
  models.cntn_canteen_outlet.hasMany(models.cntn_menu_item, { as: 'cntnMenuItem', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' })
  models.cntn_menu_item.belongsTo(models.cntn_menu_category, { as: 'menuCategoryCode', foreignKey: 'menuCategoryCode', targetKey: 'menuCategoryCode', onUpdate: 'CASCADE' })
  models.cntn_menu_category.hasMany(models.cntn_menu_item, { as: 'cntnMenuItem', foreignKey: 'menuCategoryCode', sourceKey: 'menuCategoryCode', onUpdate: 'CASCADE' })
  models.cntn_menu_item_allergen.belongsTo(models.cntn_menu_item, { as: 'menuItem', foreignKey: 'menuItemId', targetKey: 'menuItemId', onDelete: 'CASCADE' })
  models.cntn_menu_item.hasMany(models.cntn_menu_item_allergen, { as: 'cntnMenuItemAllergen', foreignKey: 'menuItemId', sourceKey: 'menuItemId', onDelete: 'CASCADE' })
  models.cntn_menu_item_allergen.belongsTo(models.cntn_allergen, { as: 'allergenCode', foreignKey: 'allergenCode', targetKey: 'allergenCode', onUpdate: 'CASCADE' })
  models.cntn_allergen.hasMany(models.cntn_menu_item_allergen, { as: 'cntnMenuItemAllergen', foreignKey: 'allergenCode', sourceKey: 'allergenCode', onUpdate: 'CASCADE' })
  models.cntn_person_allergen.belongsTo(models.cntn_allergen, { as: 'allergenCode', foreignKey: 'allergenCode', targetKey: 'allergenCode', onUpdate: 'CASCADE' })
  models.cntn_allergen.hasMany(models.cntn_person_allergen, { as: 'cntnPersonAllergen', foreignKey: 'allergenCode', sourceKey: 'allergenCode', onUpdate: 'CASCADE' })
  models.cntn_weekly_menu.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' })
  models.cntn_canteen_outlet.hasMany(models.cntn_weekly_menu, { as: 'cntnWeeklyMenu', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' })
  models.cntn_weekly_menu_item.belongsTo(models.cntn_meal_period, { as: 'mealPeriodCode', foreignKey: 'mealPeriodCode', targetKey: 'mealPeriodCode', onUpdate: 'CASCADE' })
  models.cntn_meal_period.hasMany(models.cntn_weekly_menu_item, { as: 'cntnWeeklyMenuItem', foreignKey: 'mealPeriodCode', sourceKey: 'mealPeriodCode', onUpdate: 'CASCADE' })
  models.cntn_weekly_menu_item.belongsTo(models.cntn_weekly_menu, { as: 'weeklyMenu', foreignKey: 'weeklyMenuId', targetKey: 'weeklyMenuId', onDelete: 'CASCADE' })
  models.cntn_weekly_menu.hasMany(models.cntn_weekly_menu_item, { as: 'cntnWeeklyMenuItem', foreignKey: 'weeklyMenuId', sourceKey: 'weeklyMenuId', onDelete: 'CASCADE' })
  models.cntn_weekly_menu_item.belongsTo(models.cntn_menu_item, { as: 'menuItem', foreignKey: 'menuItemId', targetKey: 'menuItemId' })
  models.cntn_menu_item.hasMany(models.cntn_weekly_menu_item, { as: 'cntnWeeklyMenuItem', foreignKey: 'menuItemId', sourceKey: 'menuItemId' })
  models.cntn_daily_menu.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' })
  models.cntn_canteen_outlet.hasMany(models.cntn_daily_menu, { as: 'cntnDailyMenu', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' })
  models.cntn_daily_menu.belongsTo(models.cntn_meal_period, { as: 'mealPeriodCode', foreignKey: 'mealPeriodCode', targetKey: 'mealPeriodCode', onUpdate: 'CASCADE' })
  models.cntn_meal_period.hasMany(models.cntn_daily_menu, { as: 'cntnDailyMenu', foreignKey: 'mealPeriodCode', sourceKey: 'mealPeriodCode', onUpdate: 'CASCADE' })
  models.cntn_daily_menu.belongsTo(models.cntn_weekly_menu, { as: 'weeklyMenu', foreignKey: 'weeklyMenuId', targetKey: 'weeklyMenuId' })
  models.cntn_weekly_menu.hasMany(models.cntn_daily_menu, { as: 'cntnDailyMenu', foreignKey: 'weeklyMenuId', sourceKey: 'weeklyMenuId' })
  models.cntn_daily_menu_item.belongsTo(models.cntn_daily_menu, { as: 'dailyMenu', foreignKey: 'dailyMenuId', targetKey: 'dailyMenuId', onDelete: 'CASCADE' })
  models.cntn_daily_menu.hasMany(models.cntn_daily_menu_item, { as: 'cntnDailyMenuItem', foreignKey: 'dailyMenuId', sourceKey: 'dailyMenuId', onDelete: 'CASCADE' })
  models.cntn_daily_menu_item.belongsTo(models.cntn_menu_item, { as: 'menuItem', foreignKey: 'menuItemId', targetKey: 'menuItemId' })
  models.cntn_menu_item.hasMany(models.cntn_daily_menu_item, { as: 'cntnDailyMenuItem', foreignKey: 'menuItemId', sourceKey: 'menuItemId' })
  models.cntn_meal_plan.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' })
  models.cntn_canteen_outlet.hasMany(models.cntn_meal_plan, { as: 'cntnMealPlan', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' })
  models.cntn_meal_plan_period.belongsTo(models.cntn_meal_plan, { as: 'mealPlan', foreignKey: 'mealPlanId', targetKey: 'mealPlanId', onDelete: 'CASCADE' })
  models.cntn_meal_plan.hasMany(models.cntn_meal_plan_period, { as: 'cntnMealPlanPeriod', foreignKey: 'mealPlanId', sourceKey: 'mealPlanId', onDelete: 'CASCADE' })
  models.cntn_meal_plan_period.belongsTo(models.cntn_meal_period, { as: 'mealPeriodCode', foreignKey: 'mealPeriodCode', targetKey: 'mealPeriodCode', onUpdate: 'CASCADE' })
  models.cntn_meal_period.hasMany(models.cntn_meal_plan_period, { as: 'cntnMealPlanPeriod', foreignKey: 'mealPeriodCode', sourceKey: 'mealPeriodCode', onUpdate: 'CASCADE' })
  models.cntn_meal_subscription.belongsTo(models.cntn_meal_plan, { as: 'mealPlan', foreignKey: 'mealPlanId', targetKey: 'mealPlanId' })
  models.cntn_meal_plan.hasMany(models.cntn_meal_subscription, { as: 'cntnMealSubscription', foreignKey: 'mealPlanId', sourceKey: 'mealPlanId' })
  models.cntn_canteen_order.belongsTo(models.cntn_canteen_outlet, { as: 'canteenOutlet', foreignKey: 'canteenOutletId', targetKey: 'canteenOutletId' })
  models.cntn_canteen_outlet.hasMany(models.cntn_canteen_order, { as: 'cntnCanteenOrder', foreignKey: 'canteenOutletId', sourceKey: 'canteenOutletId' })
  models.cntn_canteen_order.belongsTo(models.cntn_daily_menu, { as: 'dailyMenu', foreignKey: 'dailyMenuId', targetKey: 'dailyMenuId' })
  models.cntn_daily_menu.hasMany(models.cntn_canteen_order, { as: 'cntnCanteenOrder', foreignKey: 'dailyMenuId', sourceKey: 'dailyMenuId' })
  models.cntn_canteen_order.belongsTo(models.cntn_wallet, { as: 'wallet', foreignKey: 'walletId', targetKey: 'walletId' })
  models.cntn_wallet.hasMany(models.cntn_canteen_order, { as: 'cntnCanteenOrder', foreignKey: 'walletId', sourceKey: 'walletId' })
  models.cntn_canteen_order.belongsTo(models.cntn_meal_subscription, { as: 'mealSubscription', foreignKey: 'mealSubscriptionId', targetKey: 'mealSubscriptionId' })
  models.cntn_meal_subscription.hasMany(models.cntn_canteen_order, { as: 'cntnCanteenOrder', foreignKey: 'mealSubscriptionId', sourceKey: 'mealSubscriptionId' })
  models.cntn_canteen_order_line.belongsTo(models.cntn_canteen_order, { as: 'canteenOrder', foreignKey: 'canteenOrderId', targetKey: 'canteenOrderId', onDelete: 'CASCADE' })
  models.cntn_canteen_order.hasMany(models.cntn_canteen_order_line, { as: 'cntnCanteenOrderLine', foreignKey: 'canteenOrderId', sourceKey: 'canteenOrderId', onDelete: 'CASCADE' })
  models.cntn_canteen_order_line.belongsTo(models.cntn_menu_item, { as: 'menuItem', foreignKey: 'menuItemId', targetKey: 'menuItemId' })
  models.cntn_menu_item.hasMany(models.cntn_canteen_order_line, { as: 'cntnCanteenOrderLine', foreignKey: 'menuItemId', sourceKey: 'menuItemId' })
  models.cntn_canteen_order_status_history.belongsTo(models.cntn_canteen_order, { as: 'canteenOrder', foreignKey: 'canteenOrderId', targetKey: 'canteenOrderId', onDelete: 'CASCADE' })
  models.cntn_canteen_order.hasMany(models.cntn_canteen_order_status_history, { as: 'cntnCanteenOrderStatusHistory', foreignKey: 'canteenOrderId', sourceKey: 'canteenOrderId', onDelete: 'CASCADE' })
  models.cntn_wallet_transaction.belongsTo(models.cntn_wallet, { as: 'wallet', foreignKey: 'walletId', targetKey: 'walletId' })
  models.cntn_wallet.hasMany(models.cntn_wallet_transaction, { as: 'cntnWalletTransaction', foreignKey: 'walletId', sourceKey: 'walletId' })
  models.cntn_wallet_transaction.belongsTo(models.cntn_wallet_transaction, { as: 'reversesWalletTransaction', foreignKey: 'reversesWalletTransactionId', targetKey: 'walletTransactionId' })
  models.cntn_wallet_transaction.hasMany(models.cntn_wallet_transaction, { as: 'cntnWalletTransaction', foreignKey: 'reversesWalletTransactionId', sourceKey: 'walletTransactionId' })
  models.cntn_wallet_transaction.belongsTo(models.cntn_canteen_order, { as: 'canteenOrder', foreignKey: 'canteenOrderId', targetKey: 'canteenOrderId' })
  models.cntn_canteen_order.hasMany(models.cntn_wallet_transaction, { as: 'cntnWalletTransaction', foreignKey: 'canteenOrderId', sourceKey: 'canteenOrderId' })
}
