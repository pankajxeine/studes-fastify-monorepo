import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AlertSystemDetailsAttributes = {
  id?: number
  alertSystemId: number
  subId: number
  readAt?: Date | null
  alertReadUserIds?: unknown | null
  updatedAt: Date
  createdAt: Date
}

export type AlertSystemDetailsCreationAttributes = Optional<AlertSystemDetailsAttributes, "id" | "readAt" | "alertReadUserIds">

export class AlertSystemDetailsEntity
  extends Model<AlertSystemDetailsAttributes, AlertSystemDetailsCreationAttributes>
  implements AlertSystemDetailsAttributes
{
  declare id: number
  declare alertSystemId: number
  declare subId: number
  declare readAt: Date | null
  declare alertReadUserIds: unknown | null
  declare updatedAt: Date
  declare createdAt: Date
}

export function initAlertSystemDetailsEntity(sequelize: Sequelize): typeof AlertSystemDetailsEntity {
  AlertSystemDetailsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      alertSystemId: {
        type: DataTypes.INTEGER,
        field: 'alert_system_id',
        allowNull: false,
      },
      subId: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: false,
      },
      readAt: {
        type: DataTypes.DATE,
        field: 'read_at',
        allowNull: true,
      },
      alertReadUserIds: {
        type: DataTypes.JSONB,
        field: 'alert_read_user_ids',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'alert_system_details',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return AlertSystemDetailsEntity
}
