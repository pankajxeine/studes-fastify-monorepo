"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumniDonationCampaignEntity = void 0;
exports.initAlumniDonationCampaignEntity = initAlumniDonationCampaignEntity;
const sequelize_1 = require("sequelize");
class AlumniDonationCampaignEntity extends sequelize_1.Model {
}
exports.AlumniDonationCampaignEntity = AlumniDonationCampaignEntity;
function initAlumniDonationCampaignEntity(sequelize) {
    AlumniDonationCampaignEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('alumni_donation_campaign')"),
        },
        donationCampaignId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'donation_campaign_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        code: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        fundPurpose: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fund_purpose',
            allowNull: false,
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        goalAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'goal_amount',
            allowNull: false,
        },
        startsOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'starts_on',
            allowNull: false,
        },
        endsOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'ends_on',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        ownerStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'owner_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        isPublic: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_public',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'alumni_donation_campaign',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['code'] }
        ]
    });
    return AlumniDonationCampaignEntity;
}
