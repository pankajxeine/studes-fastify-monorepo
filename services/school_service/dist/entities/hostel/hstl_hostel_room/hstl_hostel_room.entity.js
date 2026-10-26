"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HstlHostelRoomEntity = void 0;
exports.initHstlHostelRoomEntity = initHstlHostelRoomEntity;
const sequelize_1 = require("sequelize");
class HstlHostelRoomEntity extends sequelize_1.Model {
}
exports.HstlHostelRoomEntity = HstlHostelRoomEntity;
function initHstlHostelRoomEntity(sequelize) {
    HstlHostelRoomEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hstl_hostel_room')"),
        },
        hostelRoomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hostel_room_id',
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
        roomNo: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'room_no',
            allowNull: false,
        },
        floorNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'floor_no',
            allowNull: false,
            defaultValue: 0,
        },
        roomType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'room_type',
            allowNull: false,
        },
        bedCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'bed_count',
            allowNull: false,
        },
        hasAttachedBath: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_attached_bath',
            allowNull: false,
            defaultValue: false,
        },
        hasAirConditioning: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_air_conditioning',
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
        tableName: 'hstl_hostel_room',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['hostel_id', 'room_no'] }
        ]
    });
    return HstlHostelRoomEntity;
}
