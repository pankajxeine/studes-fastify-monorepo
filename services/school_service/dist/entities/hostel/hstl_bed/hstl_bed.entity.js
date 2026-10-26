"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HstlBedEntity = void 0;
exports.initHstlBedEntity = initHstlBedEntity;
const sequelize_1 = require("sequelize");
class HstlBedEntity extends sequelize_1.Model {
}
exports.HstlBedEntity = HstlBedEntity;
function initHstlBedEntity(sequelize) {
    HstlBedEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hstl_bed')"),
        },
        bedId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'bed_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        hostelRoomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hostel_room_id',
            allowNull: false,
            references: { model: 'hstl_hostel_room', key: 'hostel_room_id' },
            onDelete: 'CASCADE',
        },
        bedCode: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'bed_code',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'status',
            allowNull: false,
            defaultValue: "available",
        },
        hasStudyDesk: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_study_desk',
            allowNull: false,
            defaultValue: true,
        },
        hasLocker: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_locker',
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
        tableName: 'hstl_bed',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['hostel_room_id', 'bed_code'] }
        ]
    });
    return HstlBedEntity;
}
