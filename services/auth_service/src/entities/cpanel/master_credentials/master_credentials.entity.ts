import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MasterCredentialsAttributes = {
  id?: number | null
  instituteId?: number | null
  username?: string | null
  application?: string | null
  password?: string | null
  createdBy?: number | null
  updatedBy?: number | null
  lastPasswordUpdated?: Date | null
  fromDomain?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type MasterCredentialsCreationAttributes = Optional<MasterCredentialsAttributes, "id" | "instituteId" | "username" | "application" | "password" | "createdBy" | "updatedBy" | "lastPasswordUpdated" | "fromDomain" | "createdAt" | "updatedAt">

export class MasterCredentialsEntity
  extends Model<MasterCredentialsAttributes, MasterCredentialsCreationAttributes>
  implements MasterCredentialsAttributes
{
  declare id: number | null
  declare instituteId: number | null
  declare username: string | null
  declare application: string | null
  declare password: string | null
  declare createdBy: number | null
  declare updatedBy: number | null
  declare lastPasswordUpdated: Date | null
  declare fromDomain: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initMasterCredentialsEntity(sequelize: Sequelize): typeof MasterCredentialsEntity {
  MasterCredentialsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      instituteId: {
        type: DataTypes.TEXT,
        field: 'institute_id',
        allowNull: true,
      },
      username: {
        type: DataTypes.CHAR(30),
        field: 'username',
        allowNull: true,
      },
      application: {
        type: DataTypes.CHAR(10),
        field: 'application',
        allowNull: true,
      },
      password: {
        type: DataTypes.CHAR(250),
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
        type: DataTypes.CHAR(100),
        field: 'from_domain',
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
      tableName: 'master_credentials',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return MasterCredentialsEntity
}
