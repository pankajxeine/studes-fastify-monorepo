"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtndAttendanceTypeEntity = void 0;
exports.initAtndAttendanceTypeEntity = initAtndAttendanceTypeEntity;
const sequelize_1 = require("sequelize");
class AtndAttendanceTypeEntity extends sequelize_1.Model {
}
exports.AtndAttendanceTypeEntity = AtndAttendanceTypeEntity;
function initAtndAttendanceTypeEntity(sequelize) {
    AtndAttendanceTypeEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('atnd_attendance_type')"),
        },
        attendanceTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'attendance_type_code',
            allowNull: true,
            unique: true,
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
        presentWeight: {
            type: sequelize_1.DataTypes.DECIMAL(3, 2),
            field: 'present_weight',
            allowNull: false,
            defaultValue: 1,
        },
        countsTowardTotal: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'counts_toward_total',
            allowNull: false,
            defaultValue: true,
        },
        isExcused: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_excused',
            allowNull: false,
            defaultValue: false,
        },
        appliesToStudents: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'applies_to_students',
            allowNull: false,
            defaultValue: true,
        },
        appliesToStaff: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'applies_to_staff',
            allowNull: false,
            defaultValue: true,
        },
        colorHex: {
            type: sequelize_1.DataTypes.CHAR(7),
            field: 'color_hex',
            allowNull: true,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
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
        tableName: 'atnd_attendance_type',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return AtndAttendanceTypeEntity;
}
