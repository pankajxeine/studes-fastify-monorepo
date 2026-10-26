"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnMenuItemEntity = void 0;
exports.initCntnMenuItemEntity = initCntnMenuItemEntity;
const sequelize_1 = require("sequelize");
class CntnMenuItemEntity extends sequelize_1.Model {
}
exports.CntnMenuItemEntity = CntnMenuItemEntity;
function initCntnMenuItemEntity(sequelize) {
    CntnMenuItemEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_menu_item')"),
        },
        menuItemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'menu_item_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        canteenOutletId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_outlet_id',
            allowNull: false,
            references: { model: 'cntn_canteen_outlet', key: 'canteen_outlet_id' },
        },
        menuCategoryCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'menu_category_code',
            allowNull: false,
            references: { model: 'cntn_menu_category', key: 'menu_category_code' },
            onUpdate: 'CASCADE',
        },
        code: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        ingredients: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'ingredients',
            allowNull: true,
        },
        portionSize: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'portion_size',
            allowNull: true,
        },
        priceAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'price_amount',
            allowNull: false,
        },
        caloriesKcal: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'calories_kcal',
            allowNull: true,
        },
        spiceLevel: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'spice_level',
            allowNull: false,
            defaultValue: 0,
        },
        isVegetarian: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_vegetarian',
            allowNull: false,
            defaultValue: false,
        },
        isVegan: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_vegan',
            allowNull: false,
            defaultValue: false,
        },
        isHalal: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_halal',
            allowNull: false,
            defaultValue: false,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'cntn_menu_item',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['canteen_outlet_id', 'code'] },
            { unique: true, fields: ['menu_item_id', 'canteen_outlet_id'] }
        ]
    });
    return CntnMenuItemEntity;
}
