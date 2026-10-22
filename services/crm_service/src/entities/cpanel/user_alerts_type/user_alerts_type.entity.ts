import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserAlertsTypeAttributes = {
  id?: string | number | null
  userId?: number | null
  alertTypeId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type UserAlertsTypeCreationAttributes = Optional<UserAlertsTypeAttributes, "id" | "userId" | "alertTypeId" | "createdAt" | "updatedAt">

export class UserAlertsTypeEntity
  extends Model<UserAlertsTypeAttributes, UserAlertsTypeCreationAttributes>
  implements UserAlertsTypeAttributes
{
  declare id: string | number | null
  declare userId: number | null
  declare alertTypeId: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserAlertsTypeEntity(sequelize: Sequelize): typeof UserAlertsTypeEntity {
  UserAlertsTypeEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: true,
        references: { model: 'users', key: 'id' },
      },
      alertTypeId: {
        type: DataTypes.INTEGER,
        field: 'alert_type_id',
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
      tableName: 'user_alerts_type',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['alert_type_id', 'user_id'] }
      ]
    }
  )
  return UserAlertsTypeEntity
}
