import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserBranchesAttributes = {
  id: number
  userId: string | number
  branchId: string | number
  createdAt: Date
  updatedAt: Date
}

export type UserBranchesCreationAttributes = Optional<UserBranchesAttributes, never>

export class UserBranchesEntity
  extends Model<UserBranchesAttributes, UserBranchesCreationAttributes>
  implements UserBranchesAttributes
{
  declare id: number
  declare userId: string | number
  declare branchId: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserBranchesEntity(sequelize: Sequelize): typeof UserBranchesEntity {
  UserBranchesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.BIGINT,
        field: 'user_id',
        allowNull: false,
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
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'user_branches',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_user_branches_user_id_branch_id', 'user_id', 'branch_id'] }
      ]
    }
  )
  return UserBranchesEntity
}
