"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnPlacementApplicationEntity = void 0;
exports.initPrtnPlacementApplicationEntity = initPrtnPlacementApplicationEntity;
const sequelize_1 = require("sequelize");
class PrtnPlacementApplicationEntity extends sequelize_1.Model {
}
exports.PrtnPlacementApplicationEntity = PrtnPlacementApplicationEntity;
function initPrtnPlacementApplicationEntity(sequelize) {
    PrtnPlacementApplicationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('prtn_placement_application')"),
        },
        placementApplicationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_application_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        placementDriveId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_drive_id',
            allowNull: false,
            references: { model: 'prtn_placement_drive', key: 'placement_drive_id' },
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
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "applied",
        },
        appliedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'applied_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        cgpaAtApplication: {
            type: sequelize_1.DataTypes.DECIMAL(3, 2),
            field: 'cgpa_at_application',
            allowNull: true,
        },
        coverNote: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cover_note',
            allowNull: true,
        },
        shortlistedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'shortlisted_at',
            allowNull: true,
        },
        decidedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'decided_at',
            allowNull: true,
        },
        rejectionReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'rejection_reason',
            allowNull: true,
        },
        withdrawnAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'withdrawn_at',
            allowNull: true,
        },
        withdrawalReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'withdrawal_reason',
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
        tableName: 'prtn_placement_application',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['placement_drive_id', 'student_id'] },
            { unique: true, fields: ['placement_application_id', 'placement_drive_id'] },
            { unique: true, fields: ['placement_application_id', 'student_id', 'academic_year_id'] }
        ]
    });
    return PrtnPlacementApplicationEntity;
}
