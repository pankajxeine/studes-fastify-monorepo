import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdminUsersAttributes = {
  id?: number | null
  institute_id?: number | null
  username?: string | null
  email?: string | null
  password?: string | null
  first_name?: string | null
  last_name?: string | null
  phone?: string | null
  role?: string | null
  profile_image?: string | null
  is_verified?: number | null
  last_login?: string | null
  status?: string | null
  password_reset_token?: string | null
  password_reset_expires?: string | null
  created_at?: string | null
  updated_at?: string | null
}

export type AdminUsersCreationAttributes = Optional<AdminUsersAttributes, "id" | "institute_id" | "username" | "email" | "password" | "first_name" | "last_name" | "phone" | "role" | "profile_image" | "is_verified" | "last_login" | "status" | "password_reset_token" | "password_reset_expires" | "created_at" | "updated_at">

export class AdminUsersEntity
  extends Model<AdminUsersAttributes, AdminUsersCreationAttributes>
  implements AdminUsersAttributes
{
  declare id: number | null
  declare institute_id: number | null
  declare username: string | null
  declare email: string | null
  declare password: string | null
  declare first_name: string | null
  declare last_name: string | null
  declare phone: string | null
  declare role: string | null
  declare profile_image: string | null
  declare is_verified: number | null
  declare last_login: string | null
  declare status: string | null
  declare password_reset_token: string | null
  declare password_reset_expires: string | null
  declare created_at: string | null
  declare updated_at: string | null
}

export function initAdminUsersEntity(sequelize: Sequelize): typeof AdminUsersEntity {
  AdminUsersEntity.init(
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
      email: {
        type: DataTypes.CHAR,
        field: 'email',
        allowNull: true,
        defaultValue: null,
      },
      password: {
        type: DataTypes.CHAR,
        field: 'password',
        allowNull: true,
        defaultValue: null,
      },
      first_name: {
        type: DataTypes.CHAR,
        field: 'first_name',
        allowNull: true,
        defaultValue: null,
      },
      last_name: {
        type: DataTypes.CHAR,
        field: 'last_name',
        allowNull: true,
        defaultValue: null,
      },
      phone: {
        type: DataTypes.CHAR,
        field: 'phone',
        allowNull: true,
        defaultValue: null,
      },
      role: {
        type: DataTypes.CHAR,
        field: 'role',
        allowNull: true,
        defaultValue: null,
      },
      profile_image: {
        type: DataTypes.CHAR,
        field: 'profile_image',
        allowNull: true,
        defaultValue: null,
      },
      is_verified: {
        type: DataTypes.TEXT,
        field: 'is_verified',
        allowNull: true,
      },
      last_login: {
        type: DataTypes.CHAR,
        field: 'last_login',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      password_reset_token: {
        type: DataTypes.CHAR,
        field: 'password_reset_token',
        allowNull: true,
        defaultValue: null,
      },
      password_reset_expires: {
        type: DataTypes.CHAR,
        field: 'password_reset_expires',
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
      tableName: 'admin_users',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return AdminUsersEntity
}
