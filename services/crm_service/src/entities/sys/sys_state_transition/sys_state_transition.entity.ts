import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SysStateTransitionAttributes = {
  recordCode?: string
  stateTransitionId: string | null
  entity: string
  fromState: string
  toState: string
  description?: string | null
}

export type SysStateTransitionCreationAttributes = Optional<SysStateTransitionAttributes, "recordCode" | "description">

export class SysStateTransitionEntity
  extends Model<SysStateTransitionAttributes, SysStateTransitionCreationAttributes>
  implements SysStateTransitionAttributes
{
  declare recordCode: string
  declare stateTransitionId: string | null
  declare entity: string
  declare fromState: string
  declare toState: string
  declare description: string | null
}

export function initSysStateTransitionEntity(sequelize: Sequelize): typeof SysStateTransitionEntity {
  SysStateTransitionEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('sys_state_transition')"),
      },
      stateTransitionId: {
        type: DataTypes.TEXT,
        field: 'state_transition_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      }
    },
    {
      sequelize,
      tableName: 'sys_state_transition',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['entity', 'from_state', 'to_state'] }
      ]
    }
  )
  return SysStateTransitionEntity
}
