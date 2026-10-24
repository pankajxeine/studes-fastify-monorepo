import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamRoleConflictAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  roleCodeA: string
  roleCodeB: string
  severity?: string
  rationale: string
  createdAt?: Date
  createdBy?: string | null
  UNIQUE?: string | null
}

export type IamRoleConflictCreationAttributes = Optional<IamRoleConflictAttributes, "id" | "publicId" | "recordCode" | "severity" | "createdAt" | "createdBy" | "UNIQUE">

export class IamRoleConflictEntity
  extends Model<IamRoleConflictAttributes, IamRoleConflictCreationAttributes>
  implements IamRoleConflictAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare roleCodeA: string
  declare roleCodeB: string
  declare severity: string
  declare rationale: string
  declare createdAt: Date
  declare createdBy: string | null
  declare UNIQUE: string | null
}

export function initIamRoleConflictEntity(sequelize: Sequelize): typeof IamRoleConflictEntity {
  IamRoleConflictEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_role_conflict')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'iam_role_conflict',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return IamRoleConflictEntity
}
