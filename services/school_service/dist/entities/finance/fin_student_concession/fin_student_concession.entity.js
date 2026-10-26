"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinStudentConcessionEntity = void 0;
exports.initFinStudentConcessionEntity = initFinStudentConcessionEntity;
const sequelize_1 = require("sequelize");
class FinStudentConcessionEntity extends sequelize_1.Model {
}
exports.FinStudentConcessionEntity = FinStudentConcessionEntity;
function initFinStudentConcessionEntity(sequelize) {
    FinStudentConcessionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_student_concession')"),
        },
        studentConcessionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_concession_id',
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
        concessionTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'concession_type_code',
            allowNull: true,
            references: { model: 'fin_concession_type', key: 'concession_type_code' },
            onUpdate: 'CASCADE',
        },
        scholarshipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'scholarship_id',
            allowNull: true,
            references: { model: 'fin_scholarship', key: 'scholarship_id' },
        },
        feeHeadCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_head_code',
            allowNull: true,
            references: { model: 'fin_fee_head', key: 'fee_head_code' },
            onUpdate: 'CASCADE',
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
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: false,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
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
        requestedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'requested_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
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
        rejectionReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'rejection_reason',
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
        tableName: 'fin_student_concession',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return FinStudentConcessionEntity;
}
