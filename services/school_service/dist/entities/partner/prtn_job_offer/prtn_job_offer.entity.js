"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnJobOfferEntity = void 0;
exports.initPrtnJobOfferEntity = initPrtnJobOfferEntity;
const sequelize_1 = require("sequelize");
class PrtnJobOfferEntity extends sequelize_1.Model {
}
exports.PrtnJobOfferEntity = PrtnJobOfferEntity;
function initPrtnJobOfferEntity(sequelize) {
    PrtnJobOfferEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('prtn_job_offer')"),
        },
        jobOfferId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'job_offer_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        placementApplicationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_application_id',
            allowNull: false,
            references: { model: 'prtn_placement_application', key: 'placement_application_id' },
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
        },
        offerType: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'offer_type',
            allowNull: false,
        },
        roleTitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'role_title',
            allowNull: false,
        },
        ctcAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'ctc_amount',
            allowNull: true,
        },
        stipendAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'stipend_amount',
            allowNull: true,
        },
        joiningOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'joining_on',
            allowNull: true,
        },
        endOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'end_on',
            allowNull: true,
        },
        workLocation: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'work_location',
            allowNull: true,
        },
        offerLetterFileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'offer_letter_file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        offeredAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'offered_at',
            allowNull: true,
        },
        respondByOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'respond_by_on',
            allowNull: true,
        },
        respondedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'responded_at',
            allowNull: true,
        },
        declineReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'decline_reason',
            allowNull: true,
        },
        revokedReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'revoked_reason',
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
        tableName: 'prtn_job_offer',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['placement_application_id'] },
            { unique: true, fields: ['job_offer_id', 'student_id'] }
        ]
    });
    return PrtnJobOfferEntity;
}
