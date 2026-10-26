import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgBranchAttributes = {
  recordCode?: string
  branchId: string | null
  branchCode: string
  name: string
  legalEntityId: string
  territoryId?: string | null
  countryCode: string
  timezone: string
  address?: unknown | null
  calendarId?: string | null
  managerUserId?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OrgBranchCreationAttributes = Optional<OrgBranchAttributes, "recordCode" | "territoryId" | "address" | "calendarId" | "managerUserId" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OrgBranchEntity
  extends Model<OrgBranchAttributes, OrgBranchCreationAttributes>
  implements OrgBranchAttributes
{
  declare recordCode: string
  declare branchId: string | null
  declare branchCode: string
  declare name: string
  declare legalEntityId: string
  declare territoryId: string | null
  declare countryCode: string
  declare timezone: string
  declare address: unknown | null
  declare calendarId: string | null
  declare managerUserId: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOrgBranchEntity(sequelize: Sequelize): typeof OrgBranchEntity {
  OrgBranchEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_branch')"),
      },
      branchId: {
        type: DataTypes.TEXT,
        field: 'branch_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      branchCode: {
        type: DataTypes.TEXT,
        field: 'branch_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      legalEntityId: {
        type: DataTypes.TEXT,
        field: 'legal_entity_id',
        allowNull: false,
        references: { model: 'org_legal_entity', key: 'legal_entity_id' },
      },
      territoryId: {
        type: DataTypes.TEXT,
        field: 'territory_id',
        allowNull: true,
        references: { model: 'org_territory', key: 'territory_id' },
      },
      countryCode: {
        type: DataTypes.TEXT,
        field: 'country_code',
        allowNull: false,
        references: { model: 'platform_country', key: 'country_code' },
      },
      timezone: {
        type: DataTypes.TEXT,
        field: 'timezone',
        allowNull: false,
      },
      address: {
        type: DataTypes.JSONB,
        field: 'address',
        allowNull: true,
      },
      calendarId: {
        type: DataTypes.TEXT,
        field: 'calendar_id',
        allowNull: true,
        references: { model: 'platform_calendar', key: 'calendar_id' },
      },
      managerUserId: {
        type: DataTypes.TEXT,
        field: 'manager_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
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
      tableName: 'org_branch',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['branch_code'] }
      ]
    }
  )
  return OrgBranchEntity
}
