import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdminUsersAttributes = {
  id?: number
  institute_id: number
  username: string
  email: string
  password: string
  first_name: string
  last_name?: string | null
  phone?: string | null
  role?: string
  profile_image?: string | null
  is_verified?: boolean
  last_login?: Date | null
  status?: string
  password_reset_token?: string | null
  password_reset_expires?: Date | null
  created_at?: Date
  updated_at?: Date
}

export type AdminUsersCreationAttributes = Optional<AdminUsersAttributes, "id" | "last_name" | "phone" | "role" | "profile_image" | "is_verified" | "last_login" | "status" | "password_reset_token" | "password_reset_expires" | "created_at" | "updated_at">

export class AdminUsersEntity
  extends Model<AdminUsersAttributes, AdminUsersCreationAttributes>
  implements AdminUsersAttributes {
  declare id: number
  declare institute_id: number
  declare username: string
  declare email: string
  declare password: string
  declare first_name: string
  declare last_name: string | null
  declare phone: string | null
  declare role: string
  declare profile_image: string | null
  declare is_verified: boolean
  declare last_login: Date | null
  declare status: string
  declare password_reset_token: string | null
  declare password_reset_expires: Date | null
  declare created_at: Date
  declare updated_at: Date
}

export function initAdminUsersEntity(sequelize: Sequelize): typeof AdminUsersEntity {
  AdminUsersEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      institute_id: {
        type: DataTypes.INTEGER,
        field: 'institute_id',
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(100),
        field: 'username',
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(100),
        field: 'email',
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        field: 'password',
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING(100),
        field: 'first_name',
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(100),
        field: 'last_name',
        allowNull: true,
        defaultValue: null,
      },
      phone: {
        type: DataTypes.STRING(20),
        field: 'phone',
        allowNull: true,
        defaultValue: null,
      },
      role: {
        type: DataTypes.ENUM('super admin', 'institute admin', 'finance admin', 'academics admin'),
        field: 'role',
        allowNull: false,
        defaultValue: "Institute Admin",
      },
      profile_image: {
        type: DataTypes.STRING(255),
        field: 'profile_image',
        allowNull: true,
        defaultValue: null,
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        field: 'is_verified',
        allowNull: false,
        defaultValue: "0",
      },
      last_login: {
        type: DataTypes.DATE,
        field: 'last_login',
        allowNull: true,
        defaultValue: null,
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive', 'suspended'),
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
      },
      password_reset_token: {
        type: DataTypes.STRING(255),
        field: 'password_reset_token',
        allowNull: true,
        defaultValue: null,
      },
      password_reset_expires: {
        type: DataTypes.DATE,
        field: 'password_reset_expires',
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
      tableName: 'admin_users',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      paranoid: false
    }
  )
  return AdminUsersEntity
}
