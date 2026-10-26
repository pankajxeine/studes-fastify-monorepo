"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnCanteenStaffAssignmentEntity = void 0;
exports.initCntnCanteenStaffAssignmentEntity = initCntnCanteenStaffAssignmentEntity;
const sequelize_1 = require("sequelize");
class CntnCanteenStaffAssignmentEntity extends sequelize_1.Model {
}
exports.CntnCanteenStaffAssignmentEntity = CntnCanteenStaffAssignmentEntity;
function initCntnCanteenStaffAssignmentEntity(sequelize) {
    CntnCanteenStaffAssignmentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'cntn_canteen_staff_assignment'\r\n    )"),
        },
        canteenStaffAssignmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_staff_assignment_id',
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
        staffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        dutyRole: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'duty_role',
            allowNull: false,
        },
        shiftStartTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'shift_start_time',
            allowNull: true,
        },
        shiftEndTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'shift_end_time',
            allowNull: true,
        },
        canOverrideAllergen: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'can_override_allergen',
            allowNull: false,
            defaultValue: false,
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
        tableName: 'cntn_canteen_staff_assignment',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return CntnCanteenStaffAssignmentEntity;
}
