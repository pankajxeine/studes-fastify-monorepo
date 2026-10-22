import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type UserIconSequencesAttributes = {
  id?: string | number | null
  userId: string | number
  iconKey: string
  sequence: string | number
  createdAt?: Date
  updatedAt?: Date
}

export type UserIconSequencesCreationAttributes = Optional<UserIconSequencesAttributes, "id" | "createdAt" | "updatedAt">

export class UserIconSequencesEntity
  extends Model<UserIconSequencesAttributes, UserIconSequencesCreationAttributes>
  implements UserIconSequencesAttributes
{
  declare id: string | number | null
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
      tableName: 'user_icon_sequences',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['user_id', 'icon_key'] }
      ]
    }
  )
  return UserIconSequencesEntity
}
