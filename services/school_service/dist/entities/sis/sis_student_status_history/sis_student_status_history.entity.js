"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SisStudentStatusHistoryEntity = void 0;
exports.initSisStudentStatusHistoryEntity = initSisStudentStatusHistoryEntity;
const sequelize_1 = require("sequelize");
class SisStudentStatusHistoryEntity extends sequelize_1.Model {
}
exports.SisStudentStatusHistoryEntity = SisStudentStatusHistoryEntity;
function initSisStudentStatusHistoryEntity(sequelize) {
    SisStudentStatusHistoryEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('sis_student_status_history')"),
        },
        studentStatusHistoryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_status_history_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
            onDelete: 'CASCADE',
        },
        fromStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'from_status',
            allowNull: true,
        },
        toStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'to_status',
            allowNull: false,
        },
        effectiveOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'effective_on',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_date"),
        },
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: true,
        },
        changedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'changed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
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
        tableName: 'sis_student_status_history',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return SisStudentStatusHistoryEntity;
}
