"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SisStudentEntity = void 0;
exports.initSisStudentEntity = initSisStudentEntity;
const sequelize_1 = require("sequelize");
class SisStudentEntity extends sequelize_1.Model {
}
exports.SisStudentEntity = SisStudentEntity;
function initSisStudentEntity(sequelize) {
    SisStudentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('sis_student')"),
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
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
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        applicationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_id',
            allowNull: true,
            references: { model: 'admis_application', key: 'application_id' },
        },
        houseId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'house_id',
            allowNull: true,
            references: { model: 'sis_house', key: 'house_id' },
        },
        admissionNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'admission_no',
            allowNull: false,
        },
        admittedOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'admitted_on',
            allowNull: false,
        },
        cohortYear: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'cohort_year',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "active",
        },
        leftOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'left_on',
            allowNull: true,
        },
        leavingReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'leaving_reason',
            allowNull: true,
        },
        graduatedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'graduated_on',
            allowNull: true,
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'sis_student',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt',
        indexes: [
            { unique: true, fields: ['person_id'] },
            { unique: true, fields: ['admission_no'] },
            { unique: true, fields: ['application_id'] },
            { unique: true, fields: ['student_id', 'campus_id'] }
        ]
    });
    return SisStudentEntity;
}
