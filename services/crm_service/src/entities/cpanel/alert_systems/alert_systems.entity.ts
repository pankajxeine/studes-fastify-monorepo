import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AlertSystemsAttributes = {
  id?: string | number | null
  title: string
  description: string
  alertType?: string
  sitesFlag?: string
  updatedBy?: number | null
  createdBy?: number | null
  updatedAt?: Date
  createdAt?: Date
}

export type AlertSystemsCreationAttributes = Optional<AlertSystemsAttributes, "id" | "alertType" | "sitesFlag" | "updatedBy" | "createdBy" | "updatedAt" | "createdAt">

export class AlertSystemsEntity
  extends Model<AlertSystemsAttributes, AlertSystemsCreationAttributes>
  implements AlertSystemsAttributes
{
  declare id: string | number | null
  declare title: string
  declare description: string
  declare alertType: string
  declare sitesFlag: string
  declare updatedBy: number | null
  declare createdBy: number | null
  declare updatedAt: Date
  declare createdAt: Date
}

export function initAlertSystemsEntity(sequelize: Sequelize): typeof AlertSystemsEntity {
  AlertSystemsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      title: {
        type: DataTypes.STRING(200),
        field: 'title',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      alertType: {
        type: DataTypes.TEXT,
        field: 'alert_type',
        allowNull: false,
        defaultValue: "maintenance",
      },
      sitesFlag: {
        type: DataTypes.TEXT,
        field: 'sites_flag',
        allowNull: false,
        defaultValue: "individual",
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
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
      tableName: 'alert_systems',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return AlertSystemsEntity
}
