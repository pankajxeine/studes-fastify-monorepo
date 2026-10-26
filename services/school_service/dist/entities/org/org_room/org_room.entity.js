"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgRoomEntity = void 0;
exports.initOrgRoomEntity = initOrgRoomEntity;
const sequelize_1 = require("sequelize");
class OrgRoomEntity extends sequelize_1.Model {
}
exports.OrgRoomEntity = OrgRoomEntity;
function initOrgRoomEntity(sequelize) {
    OrgRoomEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('org_room')"),
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        buildingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'building_id',
            allowNull: false,
            references: { model: 'org_building', key: 'building_id' },
            onUpdate: 'CASCADE',
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
        },
        roomTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_type_code',
            allowNull: false,
            references: { model: 'org_room_type', key: 'room_type_code' },
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
        floorNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'floor_no',
            allowNull: false,
            defaultValue: 0,
        },
        capacity: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'capacity',
            allowNull: true,
        },
        areaSqm: {
            type: sequelize_1.DataTypes.DECIMAL(7, 2),
            field: 'area_sqm',
            allowNull: true,
        },
        isBookable: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_bookable',
            allowNull: false,
            defaultValue: true,
        },
        hasProjector: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_projector',
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'org_room',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt'
    });
    return OrgRoomEntity;
}
