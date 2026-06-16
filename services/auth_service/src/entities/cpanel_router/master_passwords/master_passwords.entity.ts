import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type MasterPasswordsAttributes = {
  id?: number | null
  defaultUsername: string
  application: string
  createdBy: number
  updatedBy: number
  lastPasswordUpdated?: Date | null
  fromCpanel?: string | null
  createdAt: Date
  updatedAt: Date
}

export type MasterPasswordsCreationAttributes = Optional<MasterPasswordsAttributes, "id" | "lastPasswordUpdated" | "fromCpanel">

export class MasterPasswordsEntity
  extends Model<MasterPasswordsAttributes, MasterPasswordsCreationAttributes>
  implements MasterPasswordsAttributes
{
  declare id: number | null
  declare defaultUsername: string
  declare application: string
  declare createdBy: number
  declare updatedBy: number
  declare lastPasswordUpdated: Date | null
  declare fromCpanel: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initMasterPasswordsEntity(sequelize: Sequelize): typeof MasterPasswordsEntity {
  MasterPasswordsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      defaultUsername: {
        type: DataTypes.STRING(50),
        field: 'default_username',
        allowNull: false,
      },
      application: {
        type: DataTypes.STRING(50),
        field: 'application',
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: 'created_by',
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: 'updated_by',
        allowNull: false,
      },
      lastPasswordUpdated: {
        type: DataTypes.DATE,
        field: 'last_password_updated',
        allowNull: true,
      },
      fromCpanel: {
        type: DataTypes.STRING(50),
        field: 'from_cpanel',
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
      tableName: 'master_passwords',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['default_username'] }
      ]
    }
  )
  return MasterPasswordsEntity
}
