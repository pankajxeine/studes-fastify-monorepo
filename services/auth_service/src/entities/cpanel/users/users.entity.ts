import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UsersAttributes = {
  id: number
  roleId: number
  username: string
  password: string
  firstname: string
  lastname: string
  image: string
  email: string
  phone: string
  mobile: string
  status?: string
  passwordToken?: string | null
  passwordExpireAt?: Date | null
  access?: string
  alertPriority?: string | null
  isAdmin?: string
  userType?: string | null
  receiveAlert?: string
  isDefaultUser?: string | null
  isOmnnaUser?: string
  universityAccessRole?: string | null
  universityToken?: string | null
  universityIndustryId?: number | null
  universityUsername?: string | null
  universityPassword?: string | null
  createdBy: number
  updatedBy: number
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

export type UsersCreationAttributes = Optional<UsersAttributes, "status" | "passwordToken" | "passwordExpireAt" | "access" | "alertPriority" | "isAdmin" | "userType" | "receiveAlert" | "isDefaultUser" | "isOmnnaUser" | "universityAccessRole" | "universityToken" | "universityIndustryId" | "universityUsername" | "universityPassword" | "deletedAt">

export class UsersEntity
  extends Model<UsersAttributes, UsersCreationAttributes>
  implements UsersAttributes
{
  declare id: number
  declare roleId: number
  declare username: string
  declare password: string
  declare firstname: string
  declare lastname: string
  declare image: string
  declare email: string
  declare phone: string
  declare mobile: string
  declare status: string
  declare passwordToken: string | null
  declare passwordExpireAt: Date | null
  declare access: string
  declare alertPriority: string | null
  declare isAdmin: string
  declare userType: string | null
  declare receiveAlert: string
  declare isDefaultUser: string | null
  declare isOmnnaUser: string
  declare universityAccessRole: string | null
  declare universityToken: string | null
  declare universityIndustryId: number | null
  declare universityUsername: string | null
  declare universityPassword: string | null
  declare createdBy: number
  declare updatedBy: number
  declare createdAt: Date
  declare updatedAt: Date
  declare deletedAt: Date | null
}

export function initUsersEntity(sequelize: Sequelize): typeof UsersEntity {
  UsersEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      roleId: {
        type: DataTypes.INTEGER,
        field: 'role_id',
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(50),
        field: 'username',
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(250),
        field: 'password',
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING(20),
        field: 'firstname',
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(20),
        field: 'lastname',
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(100),
        field: 'image',
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        field: 'email',
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(20),
        field: 'phone',
        allowNull: false,
      },
      mobile: {
        type: DataTypes.STRING(20),
        field: 'mobile',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "'Active' CHECK (\n        \"status\" IN ('Active'",
      },
      passwordToken: {
        type: DataTypes.STRING(50),
        field: 'password_token',
        allowNull: true,
      },
      passwordExpireAt: {
        type: DataTypes.DATE,
        field: 'password_expire_at',
        allowNull: true,
      },
      access: {
        type: DataTypes.TEXT,
        field: 'access',
        allowNull: false,
        defaultValue: "cpanel",
      },
      alertPriority: {
        type: DataTypes.TEXT,
        field: 'alert_priority',
        allowNull: true,
        defaultValue: "",
      },
      isAdmin: {
        type: DataTypes.TEXT,
        field: 'is_admin',
        allowNull: false,
        defaultValue: "No' CHECK (\"is_admin\" IN ('Yes",
      },
      userType: {
        type: DataTypes.TEXT,
        field: 'user_type',
        allowNull: true,
      },
      receiveAlert: {
        type: DataTypes.TEXT,
        field: 'receive_alert',
        allowNull: false,
        defaultValue: "'No' CHECK (\n        \"receive_alert\" IN ('Yes'",
      },
      isDefaultUser: {
        type: DataTypes.TEXT,
        field: 'is_default_user',
        allowNull: true,
        defaultValue: "'No' CHECK (\n        \"is_default_user\" IN ('Yes'",
      },
      isOmnnaUser: {
        type: DataTypes.TEXT,
        field: 'is_omnna_user',
        allowNull: false,
        defaultValue: "'No' CHECK (\n        \"is_omnna_user\" IN ('Yes'",
      },
      universityAccessRole: {
        type: DataTypes.TEXT,
        field: 'university_access_role',
        allowNull: true,
        defaultValue: "'Level1' CHECK (\n        \"university_access_role\" IN ('Level1'",
      },
      universityToken: {
        type: DataTypes.TEXT,
        field: 'university_token',
        allowNull: true,
      },
      universityIndustryId: {
        type: DataTypes.INTEGER,
        field: 'university_industry_id',
        allowNull: true,
      },
      universityUsername: {
        type: DataTypes.STRING(200),
        field: 'university_username',
        allowNull: true,
      },
      universityPassword: {
        type: DataTypes.STRING(200),
        field: 'university_password',
        allowNull: true,
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
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_users_username_deleted_at', 'username', 'deleted_at'] }
      ]
    }
  )
  return UsersEntity
}
