"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispMeritRecordEntity = void 0;
exports.initDispMeritRecordEntity = initDispMeritRecordEntity;
const sequelize_1 = require("sequelize");
class DispMeritRecordEntity extends sequelize_1.Model {
}
exports.DispMeritRecordEntity = DispMeritRecordEntity;
function initDispMeritRecordEntity(sequelize) {
    DispMeritRecordEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('disp_merit_record')"),
        },
        meritRecordId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'merit_record_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
        },
        awardedByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'awarded_by_staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        awardedOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'awarded_on',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_date"),
        },
        points: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'points',
            allowNull: false,
        },
        category: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'category',
            allowNull: false,
        },
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: false,
        },
        incidentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'incident_id',
            allowNull: true,
            references: { model: 'disp_incident', key: 'incident_id' },
        },
        isVisibleToGuardian: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_visible_to_guardian',
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
        tableName: 'disp_merit_record',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return DispMeritRecordEntity;
}
