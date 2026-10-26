"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrStaffQualificationEntity = void 0;
exports.initHrStaffQualificationEntity = initHrStaffQualificationEntity;
const sequelize_1 = require("sequelize");
class HrStaffQualificationEntity extends sequelize_1.Model {
}
exports.HrStaffQualificationEntity = HrStaffQualificationEntity;
function initHrStaffQualificationEntity(sequelize) {
    HrStaffQualificationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hr_staff_qualification')"),
        },
        staffQualificationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_qualification_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        staffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
            onDelete: 'CASCADE',
        },
        qualificationLevel: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'qualification_level',
            allowNull: false,
        },
        degreeName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'degree_name',
            allowNull: false,
        },
        specialization: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'specialization',
            allowNull: true,
        },
        institution: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'institution',
            allowNull: false,
        },
        yearCompleted: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'year_completed',
            allowNull: true,
        },
        gradeOrScore: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'grade_or_score',
            allowNull: true,
        },
        isHighest: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_highest',
            allowNull: false,
            defaultValue: false,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
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
        tableName: 'hr_staff_qualification',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['staff_id', 'degree_name', 'institution'] }
        ]
    });
    return HrStaffQualificationEntity;
}
