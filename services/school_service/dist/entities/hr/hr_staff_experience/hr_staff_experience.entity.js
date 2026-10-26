"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrStaffExperienceEntity = void 0;
exports.initHrStaffExperienceEntity = initHrStaffExperienceEntity;
const sequelize_1 = require("sequelize");
class HrStaffExperienceEntity extends sequelize_1.Model {
}
exports.HrStaffExperienceEntity = HrStaffExperienceEntity;
function initHrStaffExperienceEntity(sequelize) {
    HrStaffExperienceEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hr_staff_experience')"),
        },
        staffExperienceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_experience_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        staffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
            onDelete: 'CASCADE',
        },
        employerName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'employer_name',
            allowNull: false,
        },
        jobTitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'job_title',
            allowNull: false,
        },
        location: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'location',
            allowNull: true,
        },
        startDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_date',
            allowNull: false,
        },
        endDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'end_date',
            allowNull: true,
        },
        responsibilities: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'responsibilities',
            allowNull: true,
        },
        reasonForLeaving: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason_for_leaving',
            allowNull: true,
        },
        isVerified: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_verified',
            allowNull: false,
            defaultValue: false,
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
        tableName: 'hr_staff_experience',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['staff_id', 'employer_name', 'start_date'] }
        ]
    });
    return HrStaffExperienceEntity;
}
