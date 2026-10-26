"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HstlBedAllocationEntity = void 0;
exports.initHstlBedAllocationEntity = initHstlBedAllocationEntity;
const sequelize_1 = require("sequelize");
class HstlBedAllocationEntity extends sequelize_1.Model {
}
exports.HstlBedAllocationEntity = HstlBedAllocationEntity;
function initHstlBedAllocationEntity(sequelize) {
    HstlBedAllocationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hstl_bed_allocation')"),
        },
        bedAllocationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'bed_allocation_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        bedId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'bed_id',
            allowNull: false,
            references: { model: 'hstl_bed', key: 'bed_id' },
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
        stay: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'stay',
            allowNull: true,
            autoIncrement: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "reserved",
        },
        checkedInAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'checked_in_at',
            allowNull: true,
        },
        checkedOutAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'checked_out_at',
            allowNull: true,
        },
        allocatedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allocated_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
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
        tableName: 'hstl_bed_allocation',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return HstlBedAllocationEntity;
}
