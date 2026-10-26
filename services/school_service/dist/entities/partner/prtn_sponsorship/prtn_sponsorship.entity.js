"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnSponsorshipEntity = void 0;
exports.initPrtnSponsorshipEntity = initPrtnSponsorshipEntity;
const sequelize_1 = require("sequelize");
class PrtnSponsorshipEntity extends sequelize_1.Model {
}
exports.PrtnSponsorshipEntity = PrtnSponsorshipEntity;
function initPrtnSponsorshipEntity(sequelize) {
    PrtnSponsorshipEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('prtn_sponsorship')"),
        },
        sponsorshipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sponsorship_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        partnerOrganizationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'partner_organization_id',
            allowNull: false,
            references: { model: 'prtn_partner_organization', key: 'partner_organization_id' },
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
        },
        scholarshipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'scholarship_id',
            allowNull: true,
            references: { model: 'fin_scholarship', key: 'scholarship_id' },
        },
        partnerAgreementId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'partner_agreement_id',
            allowNull: true,
            references: { model: 'prtn_partner_agreement', key: 'partner_agreement_id' },
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'title',
            allowNull: false,
        },
        sponsorshipKind: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'sponsorship_kind',
            allowNull: false,
        },
        committedAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'committed_amount',
            allowNull: false,
        },
        receivedAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'received_amount',
            allowNull: false,
            defaultValue: 0,
        },
        beneficiaryCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'beneficiary_count',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'status',
            allowNull: false,
            defaultValue: "pledged",
        },
        pledgedOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'pledged_on',
            allowNull: false,
        },
        lastReceivedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'last_received_on',
            allowNull: true,
        },
        recognitionNote: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'recognition_note',
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
        }
    }, {
        sequelize,
        tableName: 'prtn_sponsorship',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return PrtnSponsorshipEntity;
}
