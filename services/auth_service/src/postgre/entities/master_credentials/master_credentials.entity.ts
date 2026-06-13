import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MasterCredentialsAttributes = {
  id?: number | null
  institute_id?: number | null
  username?: string | null
  application?: string | null
  password?: string | null
  created_by?: number | null
  updated_by?: number | null
  last_password_updated?: string | null
  from_domain?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type MasterCredentialsCreationAttributes = Optional<MasterCredentialsAttributes, "id" | "institute_id" | "username" | "application" | "password" | "created_by" | "updated_by" | "last_password_updated" | "from_domain" | "created_at" | "updated_at">

export class MasterCredentialsEntity
  extends Model<MasterCredentialsAttributes, MasterCredentialsCreationAttributes>
  implements MasterCredentialsAttributes
{
  declare id: number | null
  declare institute_id: number | null
  declare username: string | null
  declare application: string | null
  declare password: string | null
  declare created_by: number | null
  declare updated_by: number | null
  declare last_password_updated: string | null
  declare from_domain: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initMasterCredentialsEntity(sequelize: Sequelize): typeof MasterCredentialsEntity {
  MasterCredentialsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      institute_id: {
        type: DataTypes.TEXT,
        field: 'institute_id',
        allowNull: true,
      },
      username: {
        type: DataTypes.CHAR,
        field: 'username',
        allowNull: true,
        defaultValue: null,
      },
      application: {
        type: DataTypes.CHAR,
        field: 'application',
        allowNull: true,
        defaultValue: null,
      },
      password: {
        type: DataTypes.CHAR,
        field: 'password',
        allowNull: true,
        defaultValue: null,
      },
      created_by: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.TEXT,
        field: 'updated_by',
        allowNull: true,
      },
      last_password_updated: {
        type: DataTypes.CHAR,
        field: 'last_password_updated',
        allowNull: true,
        defaultValue: null,
      },
      from_domain: {
        type: DataTypes.CHAR,
        field: 'from_domain',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'master_credentials',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return MasterCredentialsEntity
}
