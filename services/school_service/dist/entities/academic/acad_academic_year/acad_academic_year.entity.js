"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadAcademicYearEntity = void 0;
exports.initAcadAcademicYearEntity = initAcadAcademicYearEntity;
const sequelize_1 = require("sequelize");
class AcadAcademicYearEntity extends sequelize_1.Model {
}
exports.AcadAcademicYearEntity = AcadAcademicYearEntity;
function initAcadAcademicYearEntity(sequelize) {
    AcadAcademicYearEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_academic_year')"),
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        name: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'name',
            allowNull: false,
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
        span: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'span',
            allowNull: true,
            autoIncrement: true,
        },
        isCurrent: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_current',
            allowNull: false,
            defaultValue: false,
        },
        closedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'closed_at',
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
        tableName: 'acad_academic_year',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['name'] }
        ]
    });
    return AcadAcademicYearEntity;
}
