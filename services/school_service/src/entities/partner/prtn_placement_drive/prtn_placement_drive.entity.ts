import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnPlacementDriveAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  placementDriveId?: string
  partnerOrganizationId: string
  campusId: string
  academicYearId: string
  coordinatorStaffId: string
  postedByPartnerContactId?: string | null
  code: string
  title: string
  driveKind: string
  roleTitle: string
  jobDescription?: string | null
  workLocation?: string | null
  workMode?: string
  positionsCount?: number
  ctcMinAmount?: string | null
  ctcMaxAmount?: string | null
  stipendAmount?: string | null
  engagementStartOn?: Date | null
  engagementEndOn?: Date | null
  registrationOpensOn: string
  registrationClosesOn: string
  status?: string
  approvedByUserId?: string | null
  approvedAt?: Date | null
  cancellationReason?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PrtnPlacementDriveCreationAttributes = Optional<PrtnPlacementDriveAttributes, "id" | "publicId" | "recordCode" | "placementDriveId" | "postedByPartnerContactId" | "jobDescription" | "workLocation" | "workMode" | "positionsCount" | "ctcMinAmount" | "ctcMaxAmount" | "stipendAmount" | "engagementStartOn" | "engagementEndOn" | "status" | "approvedByUserId" | "approvedAt" | "cancellationReason" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PrtnPlacementDriveEntity
  extends Model<PrtnPlacementDriveAttributes, PrtnPlacementDriveCreationAttributes>
  implements PrtnPlacementDriveAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare placementDriveId: string
  declare partnerOrganizationId: string
  declare campusId: string
  declare academicYearId: string
  declare coordinatorStaffId: string
  declare postedByPartnerContactId: string | null
  declare code: string
  declare title: string
  declare driveKind: string
  declare roleTitle: string
  declare jobDescription: string | null
  declare workLocation: string | null
  declare workMode: string
  declare positionsCount: number
  declare ctcMinAmount: string | null
  declare ctcMaxAmount: string | null
  declare stipendAmount: string | null
  declare engagementStartOn: Date | null
  declare engagementEndOn: Date | null
  declare registrationOpensOn: string
  declare registrationClosesOn: string
  declare status: string
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare cancellationReason: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPrtnPlacementDriveEntity(sequelize: Sequelize): typeof PrtnPlacementDriveEntity {
  PrtnPlacementDriveEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('prtn_placement_drive')"),
      },
      placementDriveId: {
        type: DataTypes.TEXT,
        field: 'placement_drive_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      partnerOrganizationId: {
        type: DataTypes.TEXT,
        field: 'partner_organization_id',
        allowNull: false,
        references: { model: 'prtn_partner_organization', key: 'partner_organization_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      coordinatorStaffId: {
        type: DataTypes.TEXT,
        field: 'coordinator_staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      postedByPartnerContactId: {
        type: DataTypes.UUID,
        field: 'posted_by_partner_contact_id',
        allowNull: true,
        references: { model: 'prtn_partner_contact', key: 'partner_contact_id' },
      },
      code: {
        type: DataTypes.STRING(30),
        field: 'code',
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      driveKind: {
        type: DataTypes.STRING(12),
        field: 'drive_kind',
        allowNull: false,
      },
      roleTitle: {
        type: DataTypes.TEXT,
        field: 'role_title',
        allowNull: false,
      },
      jobDescription: {
        type: DataTypes.TEXT,
        field: 'job_description',
        allowNull: true,
      },
      workLocation: {
        type: DataTypes.TEXT,
        field: 'work_location',
        allowNull: true,
      },
      workMode: {
        type: DataTypes.STRING(10),
        field: 'work_mode',
        allowNull: false,
        defaultValue: "onsite",
      },
      positionsCount: {
        type: DataTypes.SMALLINT,
        field: 'positions_count',
        allowNull: false,
        defaultValue: 1,
      },
      ctcMinAmount: {
        type: DataTypes.TEXT,
        field: 'ctc_min_amount',
        allowNull: true,
      },
      ctcMaxAmount: {
        type: DataTypes.TEXT,
        field: 'ctc_max_amount',
        allowNull: true,
      },
      stipendAmount: {
        type: DataTypes.TEXT,
        field: 'stipend_amount',
        allowNull: true,
      },
      engagementStartOn: {
        type: DataTypes.DATEONLY,
        field: 'engagement_start_on',
        allowNull: true,
      },
      engagementEndOn: {
        type: DataTypes.DATEONLY,
        field: 'engagement_end_on',
        allowNull: true,
      },
      registrationOpensOn: {
        type: DataTypes.TEXT,
        field: 'registration_opens_on',
        allowNull: false,
      },
      registrationClosesOn: {
        type: DataTypes.TEXT,
        field: 'registration_closes_on',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedAt: {
        type: DataTypes.DATE,
        field: 'approved_at',
        allowNull: true,
      },
      cancellationReason: {
        type: DataTypes.TEXT,
        field: 'cancellation_reason',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
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
      tableName: 'prtn_placement_drive',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['code'] },
      { unique: true, fields: ['placement_drive_id', 'academic_year_id'] }
      ]
    }
  )
  return PrtnPlacementDriveEntity
}
