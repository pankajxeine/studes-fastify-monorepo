"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinScholarshipEntity = void 0;
exports.initFinScholarshipEntity = initFinScholarshipEntity;
const sequelize_1 = require("sequelize");
class FinScholarshipEntity extends sequelize_1.Model {
}
exports.FinScholarshipEntity = FinScholarshipEntity;
function initFinScholarshipEntity(sequelize) {
    FinScholarshipEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_scholarship')"),
        },
        scholarshipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'scholarship_id',
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
        code: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        sponsorName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sponsor_name',
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        discountKind: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'discount_kind',
            allowNull: false,
            defaultValue: "percent",
        },
        discountValue: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'discount_value',
            allowNull: false,
        },
        maxAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'max_amount',
            allowNull: true,
        },
        budgetAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'budget_amount',
            allowNull: true,
        },
        awardedAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'awarded_amount',
            allowNull: false,
            defaultValue: 0,
        },
        maxAwards: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'max_awards',
            allowNull: true,
        },
        eligibilityCriteria: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'eligibility_criteria',
            allowNull: true,
        },
        applicationDeadline: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'application_deadline',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
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
        tableName: 'fin_scholarship',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['academic_year_id', 'code'] }
        ]
    });
    return FinScholarshipEntity;
}
