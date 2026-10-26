"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SisHouseEntity = void 0;
exports.initSisHouseEntity = initSisHouseEntity;
const sequelize_1 = require("sequelize");
class SisHouseEntity extends sequelize_1.Model {
}
exports.SisHouseEntity = SisHouseEntity;
function initSisHouseEntity(sequelize) {
    SisHouseEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('sis_house')"),
        },
        houseId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'house_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        code: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        colorHex: {
            type: sequelize_1.DataTypes.STRING(7),
            field: 'color_hex',
            allowNull: true,
        },
        motto: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'motto',
            allowNull: true,
        },
        houseMasterStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'house_master_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
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
        tableName: 'sis_house',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['campus_id', 'code'] },
            { unique: true, fields: ['campus_id', 'name'] },
            { unique: true, fields: ['house_id', 'campus_id'] }
        ]
    });
    return SisHouseEntity;
}
