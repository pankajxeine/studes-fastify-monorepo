"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnMenuItemAllergenEntity = void 0;
exports.initCntnMenuItemAllergenEntity = initCntnMenuItemAllergenEntity;
const sequelize_1 = require("sequelize");
class CntnMenuItemAllergenEntity extends sequelize_1.Model {
}
exports.CntnMenuItemAllergenEntity = CntnMenuItemAllergenEntity;
function initCntnMenuItemAllergenEntity(sequelize) {
    CntnMenuItemAllergenEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_menu_item_allergen')"),
        },
        menuItemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'menu_item_id',
            allowNull: false,
            references: { model: 'cntn_menu_item', key: 'menu_item_id' },
            onDelete: 'CASCADE',
        },
        allergenCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allergen_code',
            allowNull: false,
            references: { model: 'cntn_allergen', key: 'allergen_code' },
            onUpdate: 'CASCADE',
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
        UNIQUE: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'UNIQUE',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'cntn_menu_item_allergen',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });
    return CntnMenuItemAllergenEntity;
}
