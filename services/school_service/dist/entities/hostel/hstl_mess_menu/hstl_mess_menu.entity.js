"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HstlMessMenuEntity = void 0;
exports.initHstlMessMenuEntity = initHstlMessMenuEntity;
const sequelize_1 = require("sequelize");
class HstlMessMenuEntity extends sequelize_1.Model {
}
exports.HstlMessMenuEntity = HstlMessMenuEntity;
function initHstlMessMenuEntity(sequelize) {
    HstlMessMenuEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hstl_mess_menu')"),
        },
        messMenuId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'mess_menu_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        hostelId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hostel_id',
            allowNull: false,
            references: { model: 'hstl_hostel', key: 'hostel_id' },
        },
        dayOfWeek: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'day_of_week',
            allowNull: false,
        },
        meal: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'meal',
            allowNull: false,
        },
        menuItems: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'menu_items',
            allowNull: false,
        },
        vegetarianOption: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vegetarian_option',
            allowNull: true,
        },
        allergenNotes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allergen_notes',
            allowNull: true,
        },
        servingStartTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'serving_start_time',
            allowNull: false,
        },
        servingEndTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'serving_end_time',
            allowNull: false,
        },
        validFrom: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'valid_from',
            allowNull: false,
        },
        validTo: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_to',
            allowNull: true,
        },
        validity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'validity',
            allowNull: true,
            autoIncrement: true,
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
        tableName: 'hstl_mess_menu',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return HstlMessMenuEntity;
}
