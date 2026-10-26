"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisAdmissionCycleEntity = void 0;
exports.initAdmisAdmissionCycleEntity = initAdmisAdmissionCycleEntity;
const sequelize_1 = require("sequelize");
class AdmisAdmissionCycleEntity extends sequelize_1.Model {
}
exports.AdmisAdmissionCycleEntity = AdmisAdmissionCycleEntity;
function initAdmisAdmissionCycleEntity(sequelize) {
    AdmisAdmissionCycleEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('admis_admission_cycle')"),
        },
        admissionCycleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'admission_cycle_id',
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
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        programId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'program_id',
            allowNull: false,
            references: { model: 'acad_program', key: 'program_id' },
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
        opensOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'opens_on',
            allowNull: false,
        },
        closesOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'closes_on',
            allowNull: false,
        },
        applicationWindow: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_window',
            allowNull: true,
            autoIncrement: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "planned",
        },
        applicationFeeAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_fee_amount',
            allowNull: false,
            defaultValue: 0,
        },
        offerValidityDays: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'offer_validity_days',
            allowNull: false,
            defaultValue: 14,
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
        tableName: 'admis_admission_cycle',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['code'] }
        ]
    });
    return AdmisAdmissionCycleEntity;
}
