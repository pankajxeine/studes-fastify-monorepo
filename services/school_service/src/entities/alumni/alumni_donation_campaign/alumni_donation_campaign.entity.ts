import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AlumniDonationCampaignAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  donationCampaignId?: string
  code: string
  name: string
  description?: string | null
  fundPurpose: string
  campusId?: string | null
  goalAmount: string
  startsOn: string
  endsOn: string
  status?: string
  ownerStaffId?: string | null
  isPublic?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AlumniDonationCampaignCreationAttributes = Optional<AlumniDonationCampaignAttributes, "id" | "publicId" | "recordCode" | "donationCampaignId" | "description" | "campusId" | "status" | "ownerStaffId" | "isPublic" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AlumniDonationCampaignEntity
  extends Model<AlumniDonationCampaignAttributes, AlumniDonationCampaignCreationAttributes>
  implements AlumniDonationCampaignAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare donationCampaignId: string
  declare code: string
  declare name: string
  declare description: string | null
  declare fundPurpose: string
  declare campusId: string | null
  declare goalAmount: string
  declare startsOn: string
  declare endsOn: string
  declare status: string
  declare ownerStaffId: string | null
  declare isPublic: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAlumniDonationCampaignEntity(sequelize: Sequelize): typeof AlumniDonationCampaignEntity {
  AlumniDonationCampaignEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('alumni_donation_campaign')"),
      },
      donationCampaignId: {
        type: DataTypes.TEXT,
        field: 'donation_campaign_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      code: {
        type: DataTypes.STRING(30),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      fundPurpose: {
        type: DataTypes.TEXT,
        field: 'fund_purpose',
        allowNull: false,
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      goalAmount: {
        type: DataTypes.TEXT,
        field: 'goal_amount',
        allowNull: false,
      },
      startsOn: {
        type: DataTypes.TEXT,
        field: 'starts_on',
        allowNull: false,
      },
      endsOn: {
        type: DataTypes.TEXT,
        field: 'ends_on',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      ownerStaffId: {
        type: DataTypes.TEXT,
        field: 'owner_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      isPublic: {
        type: DataTypes.TEXT,
        field: 'is_public',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'alumni_donation_campaign',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['code'] }
      ]
    }
  )
  return AlumniDonationCampaignEntity
}
