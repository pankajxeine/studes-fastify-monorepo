import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgTeamMemberAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  teamId: string
  appUserId: string
  memberRole?: string
  validFrom?: string
  validTo?: Date | null
  createdAt?: Date
  createdBy?: string | null
  UNIQUE?: string | null
}

export type OrgTeamMemberCreationAttributes = Optional<OrgTeamMemberAttributes, "id" | "publicId" | "recordCode" | "memberRole" | "validFrom" | "validTo" | "createdAt" | "createdBy" | "UNIQUE">

export class OrgTeamMemberEntity
  extends Model<OrgTeamMemberAttributes, OrgTeamMemberCreationAttributes>
  implements OrgTeamMemberAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare teamId: string
  declare appUserId: string
  declare memberRole: string
  declare validFrom: string
  declare validTo: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare UNIQUE: string | null
}

export function initOrgTeamMemberEntity(sequelize: Sequelize): typeof OrgTeamMemberEntity {
  OrgTeamMemberEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_team_member')"),
      },
      teamId: {
        type: DataTypes.TEXT,
        field: 'team_id',
        allowNull: false,
        references: { model: 'org_team', key: 'team_id' },
        onDelete: 'CASCADE',
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      memberRole: {
        type: DataTypes.STRING(10),
        field: 'member_role',
        allowNull: false,
        defaultValue: "member",
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
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
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'org_team_member',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return OrgTeamMemberEntity
}
