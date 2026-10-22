import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserAutogenerateReportsAttributes = {
  id?: string | number | null
  templateId: number
  userId: number
  interval?: string
  scheduledTime?: Date | null
  createdAt?: Date
  updatedAt?: Date
}

export type UserAutogenerateReportsCreationAttributes = Optional<UserAutogenerateReportsAttributes, "id" | "interval" | "scheduledTime" | "createdAt" | "updatedAt">

export class UserAutogenerateReportsEntity
  extends Model<UserAutogenerateReportsAttributes, UserAutogenerateReportsCreationAttributes>
  implements UserAutogenerateReportsAttributes
{
  declare id: string | number | null
  declare templateId: number
  declare userId: number
  declare interval: string
  declare scheduledTime: Date | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserAutogenerateReportsEntity(sequelize: Sequelize): typeof UserAutogenerateReportsEntity {
  UserAutogenerateReportsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      templateId: {
        type: DataTypes.INTEGER,
        field: 'template_id',
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
        references: { model: 'users', key: 'id' },
      },
      interval: {
        type: DataTypes.TEXT,
        field: 'interval',
        allowNull: false,
        defaultValue: "Never",
      },
      scheduledTime: {
        type: DataTypes.DATE,
        field: 'scheduled_time',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'user_autogenerate_reports',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['user_id'] }
      ]
    }
  )
  return UserAutogenerateReportsEntity
}
