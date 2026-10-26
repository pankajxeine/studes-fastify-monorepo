"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TtblSubstitutionEntity = void 0;
exports.initTtblSubstitutionEntity = initTtblSubstitutionEntity;
const sequelize_1 = require("sequelize");
class TtblSubstitutionEntity extends sequelize_1.Model {
}
exports.TtblSubstitutionEntity = TtblSubstitutionEntity;
function initTtblSubstitutionEntity(sequelize) {
    TtblSubstitutionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('ttbl_substitution')"),
        },
        substitutionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'substitution_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        timetableEntryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'timetable_entry_id',
            allowNull: false,
            references: { model: 'ttbl_timetable_entry', key: 'timetable_entry_id' },
        },
        substitutionDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'substitution_date',
            allowNull: false,
        },
        substituteStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'substitute_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        substituteRoomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'substitute_room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        isClassCancelled: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_class_cancelled',
            allowNull: false,
            defaultValue: false,
        },
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: false,
        },
        leaveRequestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'leave_request_id',
            allowNull: true,
            references: { model: 'hr_leave_request', key: 'leave_request_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "pending",
        },
        requestedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requested_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        approvedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'approved_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        approvedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'approved_at',
            allowNull: true,
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
        tableName: 'ttbl_substitution',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return TtblSubstitutionEntity;
}
