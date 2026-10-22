import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UsersAttributes = {
  id?: string | number | null
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
  isDefaultUser?: string
  isOmnnaUser?: string
  universityAccessRole?: string | null
  universityToken?: string | null
  universityIndustryId?: number | null
  universityUsername?: string | null
  universityPassword?: string | null
  createdBy: number
  updatedBy: number
  createdAt?: Date
  updatedAt?: Date
}

export type UsersCreationAttributes = Optional<UsersAttributes, "id" | "status" | "passwordToken" | "passwordExpireAt" | "access" | "alertPriority" | "isAdmin" | "userType" | "receiveAlert" | "isDefaultUser" | "isOmnnaUser" | "universityAccessRole" | "universityToken" | "universityIndustryId" | "universityUsername" | "universityPassword" | "createdAt" | "updatedAt">

export class UsersEntity
  extends Model<UsersAttributes, UsersCreationAttributes>
  implements UsersAttributes
{
  declare id: string | number | null
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
  declare isDefaultUser: string
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
}

export function initUsersEntity(sequelize: Sequelize): typeof UsersEntity {
  UsersEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      roleId: {
        type: DataTypes.INTEGER,
        field: 'role_id',
        allowNull: false,
        references: { model: 'roles', key: 'id' },
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
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: false,
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: false,
      },
      mobile: {
        type: DataTypes.TEXT,
        field: 'mobile',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "Active",
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
        defaultValue: "FALSE",
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
        defaultValue: "FALSE",
      },
      isDefaultUser: {
        type: DataTypes.TEXT,
        field: 'is_default_user',
        allowNull: false,
        defaultValue: "FALSE",
      },
      isOmnnaUser: {
        type: DataTypes.TEXT,
        field: 'is_omnna_user',
        allowNull: false,
        defaultValue: "FALSE",
      },
      universityAccessRole: {
        type: DataTypes.TEXT,
        field: 'university_access_role',
        allowNull: true,
        defaultValue: "Level1",
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
      tableName: 'users',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['username'] }
      ]
    }
  )
  return UsersEntity
}
