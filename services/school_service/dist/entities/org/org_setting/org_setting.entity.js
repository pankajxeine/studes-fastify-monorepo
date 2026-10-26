"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgSettingEntity = void 0;
exports.initOrgSettingEntity = initOrgSettingEntity;
const sequelize_1 = require("sequelize");
class OrgSettingEntity extends sequelize_1.Model {
}
exports.OrgSettingEntity = OrgSettingEntity;
function initOrgSettingEntity(sequelize) {
    OrgSettingEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('org_setting')"),
        },
        settingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'setting_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        module: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'module',
            allowNull: false,
        },
        settingKey: {
            type: sequelize_1.DataTypes.STRING(80),
            field: 'setting_key',
            allowNull: false,
        },
        value: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'value',
            allowNull: false,
        },
        valueType: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'value_type',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        isEditable: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_editable',
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
        tableName: 'org_setting',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['campus_id', 'module', 'setting_key'] }
        ]
    });
    return OrgSettingEntity;
}
