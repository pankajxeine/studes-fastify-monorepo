"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamReportCardRemarkEntity = void 0;
exports.initExamReportCardRemarkEntity = initExamReportCardRemarkEntity;
const sequelize_1 = require("sequelize");
class ExamReportCardRemarkEntity extends sequelize_1.Model {
}
exports.ExamReportCardRemarkEntity = ExamReportCardRemarkEntity;
function initExamReportCardRemarkEntity(sequelize) {
    ExamReportCardRemarkEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('exam_report_card_remark')"),
        },
        reportCardRemarkId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'report_card_remark_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        reportCardId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'report_card_id',
            allowNull: false,
            references: { model: 'exam_report_card', key: 'report_card_id' },
            onDelete: 'CASCADE',
        },
        remarkByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'remark_by_staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        remarkKind: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'remark_kind',
            allowNull: false,
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: true,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
        },
        remark: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'remark',
            allowNull: false,
        },
        areasToImprove: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'areas_to_improve',
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
        tableName: 'exam_report_card_remark',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['report_card_id', 'remark_kind', 'course_offering_id'] }
        ]
    });
    return ExamReportCardRemarkEntity;
}
