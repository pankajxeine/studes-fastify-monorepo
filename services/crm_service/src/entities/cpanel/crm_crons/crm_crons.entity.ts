import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmCronsAttributes = {
  id?: string | number | null
  name?: string | null
  isActive?: string
  createdAt?: Date
  updatedAt?: Date
}

export type CrmCronsCreationAttributes = Optional<CrmCronsAttributes, "id" | "name" | "isActive" | "createdAt" | "updatedAt">

export class CrmCronsEntity
  extends Model<CrmCronsAttributes, CrmCronsCreationAttributes>
  implements CrmCronsAttributes
{
  declare id: string | number | null
  declare name: string | null
  declare isActive: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCrmCronsEntity(sequelize: Sequelize): typeof CrmCronsEntity {
  CrmCronsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      name: {
        type: DataTypes.STRING(200),
        field: 'name',
        allowNull: true,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: "FALSE",
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
      tableName: 'crm_crons',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmCronsEntity
}
