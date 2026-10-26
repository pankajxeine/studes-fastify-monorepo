"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumniAlumniEmploymentEntity = void 0;
exports.initAlumniAlumniEmploymentEntity = initAlumniAlumniEmploymentEntity;
const sequelize_1 = require("sequelize");
class AlumniAlumniEmploymentEntity extends sequelize_1.Model {
}
exports.AlumniAlumniEmploymentEntity = AlumniAlumniEmploymentEntity;
function initAlumniAlumniEmploymentEntity(sequelize) {
    AlumniAlumniEmploymentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('alumni_alumni_employment')"),
        },
        alumniEmploymentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'alumni_employment_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        alumnusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'alumnus_id',
            allowNull: false,
            references: { model: 'alumni_alumnus', key: 'alumnus_id' },
            onDelete: 'CASCADE',
        },
        employerName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'employer_name',
            allowNull: false,
        },
        jobTitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'job_title',
            allowNull: false,
        },
        employmentType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'employment_type',
            allowNull: false,
            defaultValue: "full_time",
        },
        industry: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry',
            allowNull: true,
        },
        city: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'city',
            allowNull: true,
        },
        countryCode: {
            type: sequelize_1.DataTypes.CHAR(2),
            field: 'country_code',
            allowNull: true,
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
        isPrimary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_primary',
            allowNull: false,
            defaultValue: true,
        },
        isCurrent: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_current',
            allowNull: true,
            autoIncrement: true,
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
        tableName: 'alumni_alumni_employment',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return AlumniAlumniEmploymentEntity;
}
