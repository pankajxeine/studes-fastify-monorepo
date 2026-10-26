import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgTeamMemberAttributes = {
  recordCode?: string
  teamMemberId: string | null
  teamId: string
  appUserId: string
  memberRole?: string
  validFrom?: string
  validTo?: Date | null
  createdAt?: Date
  createdBy?: string | null
}

export type OrgTeamMemberCreationAttributes = Optional<OrgTeamMemberAttributes, "recordCode" | "memberRole" | "validFrom" | "validTo" | "createdAt" | "createdBy">

export class OrgTeamMemberEntity
  extends Model<OrgTeamMemberAttributes, OrgTeamMemberCreationAttributes>
  implements OrgTeamMemberAttributes
{
  declare recordCode: string
  declare teamMemberId: string | null
  declare teamId: string
  declare appUserId: string
  declare memberRole: string
  declare validFrom: string
  declare validTo: Date | null
  declare createdAt: Date
  declare createdBy: string | null
}

export function initOrgTeamMemberEntity(sequelize: Sequelize): typeof OrgTeamMemberEntity {
  OrgTeamMemberEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_team_member')"),
      },
      teamMemberId: {
        type: DataTypes.TEXT,
        field: 'team_member_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      }
    },
    {
      sequelize,
      tableName: 'org_team_member',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['team_id', 'app_user_id', 'valid_from'] }
      ]
    }
  )
  return OrgTeamMemberEntity
}
