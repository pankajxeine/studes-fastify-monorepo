"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgBuildingEntity = void 0;
exports.initOrgBuildingEntity = initOrgBuildingEntity;
const sequelize_1 = require("sequelize");
class OrgBuildingEntity extends sequelize_1.Model {
}
exports.OrgBuildingEntity = OrgBuildingEntity;
function initOrgBuildingEntity(sequelize) {
    OrgBuildingEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('org_building')"),
        },
        buildingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'building_id',
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
            type: sequelize_1.DataTypes.STRING(20),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        floors: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'floors',
            allowNull: false,
            defaultValue: 1,
        },
        yearBuilt: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'year_built',
            allowNull: true,
        },
        hasLift: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_lift',
            allowNull: false,
            defaultValue: false,
        },
        isAccessible: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_accessible',
            allowNull: false,
            defaultValue: false,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
            allowNull: true,
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
        tableName: 'org_building',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['campus_id', 'code'] },
            { unique: true, fields: ['building_id', 'campus_id'] }
        ]
    });
    return OrgBuildingEntity;
}
