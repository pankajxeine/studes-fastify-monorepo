import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SysStateTransitionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  entity: string
  fromState: string
  toState: string
  description?: string | null
  UNIQUE?: string | null
}

export type SysStateTransitionCreationAttributes = Optional<SysStateTransitionAttributes, "id" | "publicId" | "recordCode" | "description" | "UNIQUE">

export class SysStateTransitionEntity
  extends Model<SysStateTransitionAttributes, SysStateTransitionCreationAttributes>
  implements SysStateTransitionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare entity: string
  declare fromState: string
  declare toState: string
  declare description: string | null
  declare UNIQUE: string | null
}

export function initSysStateTransitionEntity(sequelize: Sequelize): typeof SysStateTransitionEntity {
  SysStateTransitionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('sys_state_transition')"),
      },
      entity: {
        type: DataTypes.STRING(60),
        field: 'entity',
        allowNull: false,
      },
      fromState: {
        type: DataTypes.STRING(30),
        field: 'from_state',
        allowNull: false,
      },
      toState: {
        type: DataTypes.STRING(30),
        field: 'to_state',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
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
      tableName: 'sys_state_transition',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return SysStateTransitionEntity
}
