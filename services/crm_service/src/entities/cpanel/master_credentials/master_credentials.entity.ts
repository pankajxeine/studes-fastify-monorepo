import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MasterCredentialsAttributes = {
  id?: string | number | null
  instituteId?: number | null
  username?: string | null
  application?: string | null
  password?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  lastPasswordUpdated?: Date | null
  fromDomain?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type MasterCredentialsCreationAttributes = Optional<MasterCredentialsAttributes, "id" | "instituteId" | "username" | "application" | "password" | "createdBy" | "updatedBy" | "lastPasswordUpdated" | "fromDomain" | "createdAt" | "updatedAt">

export class MasterCredentialsEntity
  extends Model<MasterCredentialsAttributes, MasterCredentialsCreationAttributes>
  implements MasterCredentialsAttributes
{
  declare id: string | number | null
  declare instituteId: number | null
  declare username: string | null
  declare application: string | null
  declare password: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare lastPasswordUpdated: Date | null
  declare fromDomain: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initMasterCredentialsEntity(sequelize: Sequelize): typeof MasterCredentialsEntity {
  MasterCredentialsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      instituteId: {
        type: DataTypes.TEXT,
        field: 'institute_id',
        allowNull: true,
        references: { model: 'institutes', key: 'id' },
      },
      username: {
        type: DataTypes.STRING(30),
        field: 'username',
        allowNull: true,
      },
      application: {
        type: DataTypes.STRING(10),
        field: 'application',
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(250),
        field: 'password',
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.TEXT,
        field: 'updated_by',
        allowNull: true,
      },
      lastPasswordUpdated: {
        type: DataTypes.DATE,
        field: 'last_password_updated',
        allowNull: true,
      },
      fromDomain: {
        type: DataTypes.STRING(100),
        field: 'from_domain',
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
      tableName: 'master_credentials',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return MasterCredentialsEntity
}
