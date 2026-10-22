import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AlertSystemDetailsAttributes = {
  id?: string | number | null
  alertSystemId: number
  subId: number
  readAt?: Date | null
  alertReadUserIds?: unknown | null
  updatedAt?: Date
  createdAt?: Date
}

export type AlertSystemDetailsCreationAttributes = Optional<AlertSystemDetailsAttributes, "id" | "readAt" | "alertReadUserIds" | "updatedAt" | "createdAt">

export class AlertSystemDetailsEntity
  extends Model<AlertSystemDetailsAttributes, AlertSystemDetailsCreationAttributes>
  implements AlertSystemDetailsAttributes
{
  declare id: string | number | null
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
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      alertSystemId: {
        type: DataTypes.INTEGER,
        field: 'alert_system_id',
        allowNull: false,
        references: { model: 'alert_systems', key: 'id' },
      },
      subId: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: false,
        references: { model: 'subs', key: 'id' },
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
        defaultValue: "DataTypes.NOW",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'alert_system_details',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return AlertSystemDetailsEntity
}
