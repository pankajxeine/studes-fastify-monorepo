import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgTeamAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  teamId?: string
  teamCode: string
  name: string
  function: string
  branchId?: string | null
  leadUserId?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OrgTeamCreationAttributes = Optional<OrgTeamAttributes, "id" | "publicId" | "recordCode" | "teamId" | "branchId" | "leadUserId" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OrgTeamEntity
  extends Model<OrgTeamAttributes, OrgTeamCreationAttributes>
  implements OrgTeamAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare teamId: string
  declare teamCode: string
  declare name: string
  declare function: string
  declare branchId: string | null
  declare leadUserId: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOrgTeamEntity(sequelize: Sequelize): typeof OrgTeamEntity {
  OrgTeamEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_team')"),
      },
      teamId: {
        type: DataTypes.TEXT,
        field: 'team_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      teamCode: {
        type: DataTypes.TEXT,
        field: 'team_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      function: {
        type: DataTypes.STRING(20),
        field: 'function',
        allowNull: false,
      },
      branchId: {
        type: DataTypes.TEXT,
        field: 'branch_id',
        allowNull: true,
        references: { model: 'org_branch', key: 'branch_id' },
      },
      leadUserId: {
        type: DataTypes.TEXT,
        field: 'lead_user_id',
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
      tableName: 'org_team',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['team_code'] }
      ]
    }
  )
  return OrgTeamEntity
}
