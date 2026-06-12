import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MasterCredentialsAttributes = {
  id?: number
  institute_id: number
  username: string
  application: string
  password: string
  created_by?: number | null
  updated_by?: number | null
  last_password_updated?: Date | null
  from_domain?: string | null
  created_at?: Date
  updated_at?: Date
}

export type MasterCredentialsCreationAttributes = Optional<MasterCredentialsAttributes, "id" | "created_by" | "updated_by" | "last_password_updated" | "from_domain" | "created_at" | "updated_at">

export class MasterCredentialsEntity
  extends Model<MasterCredentialsAttributes, MasterCredentialsCreationAttributes>
  implements MasterCredentialsAttributes
{
  declare id: number
  declare institute_id: number
  declare username: string
  declare application: string
  declare password: string
  declare created_by: number | null
  declare updated_by: number | null
  declare last_password_updated: Date | null
  declare from_domain: string | null
  declare created_at: Date
  declare updated_at: Date
}

export function initMasterCredentialsEntity(sequelize: Sequelize): typeof MasterCredentialsEntity {
  MasterCredentialsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true ,
        autoIncrement: true,
      },
      institute_id: {
        type: DataTypes.INTEGER,
        field: 'institute_id',
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING(100),
        field: 'username',
        allowNull: false,
        unique: true,
      },
      application: {
        type: DataTypes.STRING(50),
        field: 'application',
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        field: 'password',
        allowNull: false,
      },
      created_by: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: true,
        defaultValue: null,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: true,
        defaultValue: null,
      },
      last_password_updated: {
        type: DataTypes.DATE,
        field: 'last_password_updated',
        allowNull: true,
        defaultValue: null,
      },
      from_domain: {
        type: DataTypes.STRING(100),
        field: 'from_domain',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
