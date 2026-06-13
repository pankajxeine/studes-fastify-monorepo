import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdminUsersAttributes = {
  id?: number | null
  username?: string | null
  email?: string | null
  password?: string | null
  firstName?: string | null
  lastName?: string | null
  phone?: string | null
  role?: string | null
  profileImage?: string | null
  isVerified?: number | null
  lastLogin?: Date | null
  status?: string | null
  passwordResetToken?: string | null
  passwordResetExpires?: Date | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type AdminUsersCreationAttributes = Optional<AdminUsersAttributes, "id" | "username" | "email" | "password" | "firstName" | "lastName" | "phone" | "role" | "profileImage" | "isVerified" | "lastLogin" | "status" | "passwordResetToken" | "passwordResetExpires" | "createdAt" | "updatedAt">

export class AdminUsersEntity
  extends Model<AdminUsersAttributes, AdminUsersCreationAttributes>
  implements AdminUsersAttributes
{
  declare id: number | null
  declare username: string | null
  declare email: string | null
  declare password: string | null
  declare firstName: string | null
  declare lastName: string | null
  declare phone: string | null
  declare role: string | null
  declare profileImage: string | null
  declare isVerified: number | null
  declare lastLogin: Date | null
  declare status: string | null
  declare passwordResetToken: string | null
  declare passwordResetExpires: Date | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initAdminUsersEntity(sequelize: Sequelize): typeof AdminUsersEntity {
  AdminUsersEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(22),
        field: 'username',
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(26),
        field: 'email',
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(250),
        field: 'password',
        allowNull: true,
      },
      firstName: {
        type: DataTypes.STRING(7),
        field: 'first_name',
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING(7),
        field: 'last_name',
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(15),
        field: 'phone',
        allowNull: true,
      },
      role: {
        type: DataTypes.STRING(13),
        field: 'role',
        allowNull: true,
      },
      profileImage: {
        type: DataTypes.STRING(1),
        field: 'profile_image',
        allowNull: true,
      },
      isVerified: {
        type: DataTypes.TEXT,
        field: 'is_verified',
        allowNull: true,
      },
      lastLogin: {
        type: DataTypes.DATE,
        field: 'last_login',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: true,
        defaultValue: "Active",
      },
      passwordResetToken: {
        type: DataTypes.STRING(255),
        field: 'password_reset_token',
        allowNull: true,
      },
      passwordResetExpires: {
        type: DataTypes.DATE,
        field: 'password_reset_expires',
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
      tableName: 'admin_users',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['username'] },
      { unique: true, fields: ['email'] }
      ]
    }
  )
  return AdminUsersEntity
}
