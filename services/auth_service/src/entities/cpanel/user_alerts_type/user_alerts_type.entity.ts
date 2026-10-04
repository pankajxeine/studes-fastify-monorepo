import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserAlertsTypeAttributes = {
  id?: number
  userId?: number | null
  alertTypeId?: number | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type UserAlertsTypeCreationAttributes = Optional<UserAlertsTypeAttributes, "id" | "userId" | "alertTypeId" | "createdAt" | "updatedAt">

export class UserAlertsTypeEntity
  extends Model<UserAlertsTypeAttributes, UserAlertsTypeCreationAttributes>
  implements UserAlertsTypeAttributes
{
  declare id: number
  declare userId: number | null
  declare alertTypeId: number | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initUserAlertsTypeEntity(sequelize: Sequelize): typeof UserAlertsTypeEntity {
  UserAlertsTypeEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: true,
      },
      alertTypeId: {
        type: DataTypes.INTEGER,
        field: 'alert_type_id',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'user_alerts_type',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_user_alerts_type_alert_type_id', 'alert_type_id', 'user_id'] }
      ]
    }
  )
  return UserAlertsTypeEntity
}
