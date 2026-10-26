"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumniAlumniHigherEducationEntity = void 0;
exports.initAlumniAlumniHigherEducationEntity = initAlumniAlumniHigherEducationEntity;
const sequelize_1 = require("sequelize");
class AlumniAlumniHigherEducationEntity extends sequelize_1.Model {
}
exports.AlumniAlumniHigherEducationEntity = AlumniAlumniHigherEducationEntity;
function initAlumniAlumniHigherEducationEntity(sequelize) {
    AlumniAlumniHigherEducationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'alumni_alumni_higher_education'\r\n    )"),
        },
        alumniHigherEducationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'alumni_higher_education_id',
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
        institutionName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'institution_name',
            allowNull: false,
        },
        degree: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'degree',
            allowNull: false,
        },
        fieldOfStudy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'field_of_study',
            allowNull: true,
        },
        studyMode: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'study_mode',
            allowNull: false,
            defaultValue: "full_time",
        },
        startYear: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'start_year',
            allowNull: false,
        },
        endYear: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'end_year',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'status',
            allowNull: false,
            defaultValue: "enrolled",
        },
        gradeObtained: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grade_obtained',
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
        tableName: 'alumni_alumni_higher_education',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['alumnus_id', 'institution_name', 'degree', 'start_year'] }
        ]
    });
    return AlumniAlumniHigherEducationEntity;
}
