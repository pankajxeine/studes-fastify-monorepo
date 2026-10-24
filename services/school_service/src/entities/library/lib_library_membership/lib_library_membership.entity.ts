import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LibLibraryMembershipAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  libraryMembershipId?: string
  personId: string
  campusId: string
  membershipNo: string
  memberType: string
  maxLoans?: number
  loanPeriodDays?: number
  validFrom: string
  validTo?: Date | null
  validity?: string | null
  status?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type LibLibraryMembershipCreationAttributes = Optional<LibLibraryMembershipAttributes, "id" | "publicId" | "recordCode" | "libraryMembershipId" | "maxLoans" | "loanPeriodDays" | "validTo" | "validity" | "status" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class LibLibraryMembershipEntity
  extends Model<LibLibraryMembershipAttributes, LibLibraryMembershipCreationAttributes>
  implements LibLibraryMembershipAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare libraryMembershipId: string
  declare personId: string
  declare campusId: string
  declare membershipNo: string
  declare memberType: string
  declare maxLoans: number
  declare loanPeriodDays: number
  declare validFrom: string
  declare validTo: Date | null
  declare validity: string | null
  declare status: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initLibLibraryMembershipEntity(sequelize: Sequelize): typeof LibLibraryMembershipEntity {
  LibLibraryMembershipEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lib_library_membership')"),
      },
      libraryMembershipId: {
        type: DataTypes.TEXT,
        field: 'library_membership_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      membershipNo: {
        type: DataTypes.STRING(30),
        field: 'membership_no',
        allowNull: false,
      },
      memberType: {
        type: DataTypes.STRING(10),
        field: 'member_type',
        allowNull: false,
      },
      maxLoans: {
        type: DataTypes.SMALLINT,
        field: 'max_loans',
        allowNull: false,
        defaultValue: 3,
      },
      loanPeriodDays: {
        type: DataTypes.SMALLINT,
        field: 'loan_period_days',
        allowNull: false,
        defaultValue: 14,
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
        allowNull: true,
      },
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "active",
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
      tableName: 'lib_library_membership',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['membership_no'] }
      ]
    }
  )
  return LibLibraryMembershipEntity
}
