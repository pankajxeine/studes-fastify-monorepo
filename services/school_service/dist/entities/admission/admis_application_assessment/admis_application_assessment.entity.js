"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisApplicationAssessmentEntity = void 0;
exports.initAdmisApplicationAssessmentEntity = initAdmisApplicationAssessmentEntity;
const sequelize_1 = require("sequelize");
class AdmisApplicationAssessmentEntity extends sequelize_1.Model {
}
exports.AdmisApplicationAssessmentEntity = AdmisApplicationAssessmentEntity;
function initAdmisApplicationAssessmentEntity(sequelize) {
    AdmisApplicationAssessmentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'admis_application_assessment'\r\n    )"),
        },
        applicationAssessmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_assessment_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        applicationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_id',
            allowNull: false,
            references: { model: 'admis_application', key: 'application_id' },
            onDelete: 'CASCADE',
        },
        assessorStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assessor_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        assessmentType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'assessment_type',
            allowNull: false,
        },
        scheduledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'scheduled_at',
            allowNull: false,
        },
        endsAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'ends_at',
            allowNull: false,
        },
        slot: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'slot',
            allowNull: true,
            autoIncrement: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "scheduled",
        },
        score: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            field: 'score',
            allowNull: true,
        },
        maxScore: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            field: 'max_score',
            allowNull: true,
        },
        result: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'result',
            allowNull: true,
        },
        remarks: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'remarks',
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
        tableName: 'admis_application_assessment',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return AdmisApplicationAssessmentEntity;
}
