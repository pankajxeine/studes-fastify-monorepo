import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdmisInquiryFollowUpAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  inquiryFollowUpId?: string
  inquiryId: string
  followedUpByStaffId?: string | null
  channel: string
  followedUpAt?: Date
  summary: string
  outcome?: string
  nextFollowUpOn?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AdmisInquiryFollowUpCreationAttributes = Optional<AdmisInquiryFollowUpAttributes, "id" | "publicId" | "recordCode" | "inquiryFollowUpId" | "followedUpByStaffId" | "followedUpAt" | "outcome" | "nextFollowUpOn" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AdmisInquiryFollowUpEntity
  extends Model<AdmisInquiryFollowUpAttributes, AdmisInquiryFollowUpCreationAttributes>
  implements AdmisInquiryFollowUpAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare inquiryFollowUpId: string
  declare inquiryId: string
  declare followedUpByStaffId: string | null
  declare channel: string
  declare followedUpAt: Date
  declare summary: string
  declare outcome: string
  declare nextFollowUpOn: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAdmisInquiryFollowUpEntity(sequelize: Sequelize): typeof AdmisInquiryFollowUpEntity {
  AdmisInquiryFollowUpEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('admis_inquiry_follow_up')"),
      },
      inquiryFollowUpId: {
        type: DataTypes.TEXT,
        field: 'inquiry_follow_up_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      inquiryId: {
        type: DataTypes.TEXT,
        field: 'inquiry_id',
        allowNull: false,
        references: { model: 'admis_inquiry', key: 'inquiry_id' },
        onDelete: 'CASCADE',
      },
      followedUpByStaffId: {
        type: DataTypes.TEXT,
        field: 'followed_up_by_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      channel: {
        type: DataTypes.STRING(20),
        field: 'channel',
        allowNull: false,
      },
      followedUpAt: {
        type: DataTypes.DATE,
        field: 'followed_up_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      summary: {
        type: DataTypes.TEXT,
        field: 'summary',
        allowNull: false,
      },
      outcome: {
        type: DataTypes.STRING(20),
        field: 'outcome',
        allowNull: false,
        defaultValue: "reached",
      },
      nextFollowUpOn: {
        type: DataTypes.DATEONLY,
        field: 'next_follow_up_on',
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
      tableName: 'admis_inquiry_follow_up',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return AdmisInquiryFollowUpEntity
}
