import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamRoleConflictAttributes = {
  recordCode?: string
  roleConflictId: string | null
  roleCodeA: string
  roleCodeB: string
  severity?: string
  rationale: string
  createdAt?: Date
  createdBy?: string | null
}

export type IamRoleConflictCreationAttributes = Optional<IamRoleConflictAttributes, "recordCode" | "severity" | "createdAt" | "createdBy">

export class IamRoleConflictEntity
  extends Model<IamRoleConflictAttributes, IamRoleConflictCreationAttributes>
  implements IamRoleConflictAttributes
{
  declare recordCode: string
  declare roleConflictId: string | null
  declare roleCodeA: string
  declare roleCodeB: string
  declare severity: string
  declare rationale: string
  declare createdAt: Date
  declare createdBy: string | null
}

export function initIamRoleConflictEntity(sequelize: Sequelize): typeof IamRoleConflictEntity {
  IamRoleConflictEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_role_conflict')"),
      },
      roleConflictId: {
        type: DataTypes.TEXT,
        field: 'role_conflict_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      roleCodeA: {
        type: DataTypes.TEXT,
        field: 'role_code_a',
        allowNull: false,
        references: { model: 'iam_role', key: 'role_code' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      roleCodeB: {
        type: DataTypes.TEXT,
        field: 'role_code_b',
        allowNull: false,
        references: { model: 'iam_role', key: 'role_code' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      severity: {
        type: DataTypes.STRING(10),
        field: 'severity',
        allowNull: false,
        defaultValue: "block",
      },
      rationale: {
        type: DataTypes.TEXT,
        field: 'rationale',
        allowNull: false,
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
      tableName: 'iam_role_conflict',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['role_code_a', 'role_code_b'] }
      ]
    }
  )
  return IamRoleConflictEntity
}
