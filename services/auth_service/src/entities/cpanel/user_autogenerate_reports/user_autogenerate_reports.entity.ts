import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserAutogenerateReportsAttributes = {
  id: number
  templateId: number
  userId: number
  interval?: string
  scheduledTime?: Date | null
  createdAt: Date
  updatedAt: Date
}

export type UserAutogenerateReportsCreationAttributes = Optional<UserAutogenerateReportsAttributes, "interval" | "scheduledTime">

export class UserAutogenerateReportsEntity
  extends Model<UserAutogenerateReportsAttributes, UserAutogenerateReportsCreationAttributes>
  implements UserAutogenerateReportsAttributes
{
  declare id: number
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
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
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
      },
      interval: {
        type: DataTypes.TEXT,
        field: 'interval',
        allowNull: false,
        defaultValue: "'Never' CHECK (\n        \"interval\" IN (\n            'Daily'",
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
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'user_autogenerate_reports',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_user_autogenerate_reports_user_id', 'user_id'] }
      ]
    }
  )
  return UserAutogenerateReportsEntity
}
