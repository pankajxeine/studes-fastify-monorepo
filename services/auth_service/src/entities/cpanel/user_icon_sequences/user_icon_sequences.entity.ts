import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserIconSequencesAttributes = {
  id: number
  userId: string | number
  iconKey: string
  sequence: string | number
  createdAt: Date
  updatedAt: Date
}

export type UserIconSequencesCreationAttributes = Optional<UserIconSequencesAttributes, never>

export class UserIconSequencesEntity
  extends Model<UserIconSequencesAttributes, UserIconSequencesCreationAttributes>
  implements UserIconSequencesAttributes
{
  declare id: number
  declare userId: string | number
  declare iconKey: string
  declare sequence: string | number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initUserIconSequencesEntity(sequelize: Sequelize): typeof UserIconSequencesEntity {
  UserIconSequencesEntity.init(
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
      iconKey: {
        type: DataTypes.STRING(255),
        field: 'icon_key',
        allowNull: false,
      },
      sequence: {
        type: DataTypes.BIGINT,
        field: 'sequence',
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
      tableName: 'user_icon_sequences',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_user_icon_sequences_user_icon_key', 'user_id', 'icon_key'] }
      ]
    }
  )
  return UserIconSequencesEntity
}
