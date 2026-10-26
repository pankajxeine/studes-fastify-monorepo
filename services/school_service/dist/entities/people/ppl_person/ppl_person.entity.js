"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PplPersonEntity = void 0;
exports.initPplPersonEntity = initPplPersonEntity;
const sequelize_1 = require("sequelize");
class PplPersonEntity extends sequelize_1.Model {
}
exports.PplPersonEntity = PplPersonEntity;
function initPplPersonEntity(sequelize) {
    PplPersonEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('ppl_person')"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        honorific: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'honorific',
            allowNull: true,
        },
        firstName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'first_name',
            allowNull: false,
        },
        middleName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'middle_name',
            allowNull: true,
        },
        lastName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'last_name',
            allowNull: false,
        },
        fullName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'full_name',
            allowNull: true,
            autoIncrement: true,
        },
        preferredName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'preferred_name',
            allowNull: true,
        },
        dateOfBirth: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'date_of_birth',
            allowNull: true,
        },
        genderCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'gender_code',
            allowNull: true,
            references: { model: 'ppl_gender', key: 'gender_code' },
            onUpdate: 'CASCADE',
        },
        nationality: {
            type: sequelize_1.DataTypes.CHAR(2),
            field: 'nationality',
            allowNull: true,
        },
        nationalId: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'national_id',
            allowNull: true,
        },
        passportNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'passport_no',
            allowNull: true,
        },
        primaryEmail: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'primary_email',
            allowNull: true,
        },
        primaryPhone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'primary_phone',
            allowNull: true,
        },
        firstLanguage: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'first_language',
            allowNull: true,
        },
        photoFileId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'photo_file_id',
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
        tableName: 'ppl_person',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt'
    });
    return PplPersonEntity;
}
