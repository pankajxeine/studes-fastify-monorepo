import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AlumniDonationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  donationId?: string
  donationNo: string
  donationCampaignId?: string | null
  donorPersonId: string
  paymentId?: string | null
  amount: string
  status?: string
  pledgedOn?: string
  receivedAt?: Date | null
  isAnonymous?: string
  dedication?: string | null
  donorMessage?: string | null
  receiptNo?: string | null
  receiptIssuedAt?: Date | null
  cancelledReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AlumniDonationCreationAttributes = Optional<AlumniDonationAttributes, "id" | "publicId" | "recordCode" | "donationId" | "donationCampaignId" | "paymentId" | "status" | "pledgedOn" | "receivedAt" | "isAnonymous" | "dedication" | "donorMessage" | "receiptNo" | "receiptIssuedAt" | "cancelledReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AlumniDonationEntity
  extends Model<AlumniDonationAttributes, AlumniDonationCreationAttributes>
  implements AlumniDonationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare donationId: string
  declare donationNo: string
  declare donationCampaignId: string | null
  declare donorPersonId: string
  declare paymentId: string | null
  declare amount: string
  declare status: string
  declare pledgedOn: string
  declare receivedAt: Date | null
  declare isAnonymous: string
  declare dedication: string | null
  declare donorMessage: string | null
  declare receiptNo: string | null
  declare receiptIssuedAt: Date | null
  declare cancelledReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAlumniDonationEntity(sequelize: Sequelize): typeof AlumniDonationEntity {
  AlumniDonationEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('alumni_donation')"),
      },
      donationId: {
        type: DataTypes.TEXT,
        field: 'donation_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      donationNo: {
        type: DataTypes.STRING(30),
        field: 'donation_no',
        allowNull: false,
      },
      donationCampaignId: {
        type: DataTypes.TEXT,
        field: 'donation_campaign_id',
        allowNull: true,
        references: { model: 'alumni_donation_campaign', key: 'donation_campaign_id' },
      },
      donorPersonId: {
        type: DataTypes.TEXT,
        field: 'donor_person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      paymentId: {
        type: DataTypes.TEXT,
        field: 'payment_id',
        allowNull: true,
        references: { model: 'fin_payment', key: 'payment_id' },
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pledged",
      },
      pledgedOn: {
        type: DataTypes.TEXT,
        field: 'pledged_on',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      receivedAt: {
        type: DataTypes.DATE,
        field: 'received_at',
        allowNull: true,
      },
      isAnonymous: {
        type: DataTypes.TEXT,
        field: 'is_anonymous',
        allowNull: false,
        defaultValue: false,
      },
      dedication: {
        type: DataTypes.TEXT,
        field: 'dedication',
        allowNull: true,
      },
      donorMessage: {
        type: DataTypes.TEXT,
        field: 'donor_message',
        allowNull: true,
      },
      receiptNo: {
        type: DataTypes.STRING(30),
        field: 'receipt_no',
        allowNull: true,
      },
      receiptIssuedAt: {
        type: DataTypes.DATE,
        field: 'receipt_issued_at',
        allowNull: true,
      },
      cancelledReason: {
        type: DataTypes.TEXT,
        field: 'cancelled_reason',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
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
    }
  )
  return AlumniDonationEntity
}
