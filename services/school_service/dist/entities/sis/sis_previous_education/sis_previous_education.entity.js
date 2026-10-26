"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SisPreviousEducationEntity = void 0;
exports.initSisPreviousEducationEntity = initSisPreviousEducationEntity;
const sequelize_1 = require("sequelize");
class SisPreviousEducationEntity extends sequelize_1.Model {
}
exports.SisPreviousEducationEntity = SisPreviousEducationEntity;
function initSisPreviousEducationEntity(sequelize) {
    SisPreviousEducationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('sis_previous_education')"),
        },
        previousEducationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'previous_education_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
            onDelete: 'CASCADE',
        },
        institutionName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'institution_name',
            allowNull: false,
        },
        institutionCity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'institution_city',
            allowNull: true,
        },
        countryCode: {
            type: sequelize_1.DataTypes.CHAR(2),
            field: 'country_code',
            allowNull: true,
        },
        boardOrUniversity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'board_or_university',
            allowNull: true,
        },
        qualification: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'qualification',
            allowNull: false,
        },
        startYear: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'start_year',
            allowNull: true,
        },
        endYear: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'end_year',
            allowNull: true,
        },
        scoreText: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'score_text',
            allowNull: true,
        },
        percentage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'percentage',
            allowNull: true,
        },
        mediumOfInstruction: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'medium_of_instruction',
            allowNull: true,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        isVerified: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_verified',
            allowNull: false,
            defaultValue: false,
        },
        verifiedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'verified_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        verifiedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'verified_at',
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
        tableName: 'sis_previous_education',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['student_id', 'institution_name', 'qualification', 'end_year'] }
        ]
    });
    return SisPreviousEducationEntity;
}
