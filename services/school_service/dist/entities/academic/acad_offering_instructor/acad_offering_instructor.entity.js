"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadOfferingInstructorEntity = void 0;
exports.initAcadOfferingInstructorEntity = initAcadOfferingInstructorEntity;
const sequelize_1 = require("sequelize");
class AcadOfferingInstructorEntity extends sequelize_1.Model {
}
exports.AcadOfferingInstructorEntity = AcadOfferingInstructorEntity;
function initAcadOfferingInstructorEntity(sequelize) {
    AcadOfferingInstructorEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_offering_instructor')"),
        },
        offeringInstructorId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'offering_instructor_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: false,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
            onDelete: 'CASCADE',
        },
        staffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        instructorRole: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'instructor_role',
            allowNull: false,
            defaultValue: "primary",
        },
        isPrimary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_primary',
            allowNull: false,
            defaultValue: true,
        },
        validFrom: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'valid_from',
            allowNull: false,
        },
        validTo: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_to',
            allowNull: true,
        },
        validity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'validity',
            allowNull: true,
            autoIncrement: true,
        },
        loadPercentage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'load_percentage',
            allowNull: false,
            defaultValue: 100,
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
        tableName: 'acad_offering_instructor',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return AcadOfferingInstructorEntity;
}
