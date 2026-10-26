"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumniDonationEntity = void 0;
exports.initAlumniDonationEntity = initAlumniDonationEntity;
const sequelize_1 = require("sequelize");
class AlumniDonationEntity extends sequelize_1.Model {
}
exports.AlumniDonationEntity = AlumniDonationEntity;
function initAlumniDonationEntity(sequelize) {
    AlumniDonationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('alumni_donation')"),
        },
        donationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'donation_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        donationNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'donation_no',
            allowNull: false,
        },
        donationCampaignId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'donation_campaign_id',
            allowNull: true,
            references: { model: 'alumni_donation_campaign', key: 'donation_campaign_id' },
        },
        donorPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'donor_person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        paymentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payment_id',
            allowNull: true,
            references: { model: 'fin_payment', key: 'payment_id' },
        },
        amount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'amount',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "pledged",
        },
        pledgedOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'pledged_on',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_date"),
        },
        receivedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'received_at',
            allowNull: true,
        },
        isAnonymous: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_anonymous',
            allowNull: false,
            defaultValue: false,
        },
        dedication: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'dedication',
            allowNull: true,
        },
        donorMessage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'donor_message',
            allowNull: true,
        },
        receiptNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'receipt_no',
            allowNull: true,
        },
        receiptIssuedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'receipt_issued_at',
            allowNull: true,
        },
        cancelledReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancelled_reason',
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
        tableName: 'alumni_donation',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['donation_no'] },
            { unique: true, fields: ['payment_id'] },
            { unique: true, fields: ['receipt_no'] }
        ]
    });
    return AlumniDonationEntity;
}
