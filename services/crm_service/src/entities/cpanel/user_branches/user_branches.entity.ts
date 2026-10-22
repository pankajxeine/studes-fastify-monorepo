import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserBranchesAttributes = {
  id?: string | number | null
  userId: string | number
  branchId: string | number
  createdAt?: Date
  updatedAt?: Date
}

export type UserBranchesCreationAttributes = Optional<UserBranchesAttributes, "id" | "createdAt" | "updatedAt">

export class UserBranchesEntity
  extends Model<UserBranchesAttributes, UserBranchesCreationAttributes>
  implements UserBranchesAttributes
{
  declare id: string | number | null
  declare userId: string | number
  declare branchId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserBranchesEntity(sequelize: Sequelize): typeof UserBranchesEntity {
  UserBranchesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      userId: {
        type: DataTypes.BIGINT,
        field: 'user_id',
        allowNull: false,
        references: { model: 'users', key: 'id' },
      },
      branchId: {
        type: DataTypes.BIGINT,
        field: 'branch_id',
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
      tableName: 'user_branches',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['user_id', 'branch_id'] }
      ]
    }
  )
  return UserBranchesEntity
}
