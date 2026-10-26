"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthImmunizationEntity = void 0;
exports.initHealthImmunizationEntity = initHealthImmunizationEntity;
const sequelize_1 = require("sequelize");
class HealthImmunizationEntity extends sequelize_1.Model {
}
exports.HealthImmunizationEntity = HealthImmunizationEntity;
function initHealthImmunizationEntity(sequelize) {
    HealthImmunizationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('health_immunization')"),
        },
        immunizationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'immunization_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        vaccineName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vaccine_name',
            allowNull: false,
        },
        doseNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'dose_no',
            allowNull: false,
            defaultValue: 1,
        },
        administeredOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'administered_on',
            allowNull: false,
        },
        nextDueOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'next_due_on',
            allowNull: true,
        },
        provider: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'provider',
            allowNull: true,
        },
        batchNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'batch_no',
            allowNull: true,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        verifiedByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'verified_by_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
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
        tableName: 'health_immunization',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['person_id', 'vaccine_name', 'dose_no'] }
        ]
    });
    return HealthImmunizationEntity;
}
