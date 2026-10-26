"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadHolidayEntity = void 0;
exports.initAcadHolidayEntity = initAcadHolidayEntity;
const sequelize_1 = require("sequelize");
class AcadHolidayEntity extends sequelize_1.Model {
}
exports.AcadHolidayEntity = AcadHolidayEntity;
function initAcadHolidayEntity(sequelize) {
    AcadHolidayEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_holiday')"),
        },
        holidayId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'holiday_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        holidayKind: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'holiday_kind',
            allowNull: false,
            defaultValue: "public_holiday",
        },
        startDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_date',
            allowNull: false,
        },
        endDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'end_date',
            allowNull: false,
        },
        isStaffWorkingDay: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_staff_working_day',
            allowNull: false,
            defaultValue: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
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
        tableName: 'acad_holiday',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['academic_year_id', 'campus_id', 'name', 'start_date'] }
        ]
    });
    return AcadHolidayEntity;
}
