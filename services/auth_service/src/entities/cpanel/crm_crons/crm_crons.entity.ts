import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmCronsAttributes = {
  id?: number
  name?: string | null
  isActive?: string | null
}

export type CrmCronsCreationAttributes = Optional<CrmCronsAttributes, "id" | "name" | "isActive">

export class CrmCronsEntity
  extends Model<CrmCronsAttributes, CrmCronsCreationAttributes>
  implements CrmCronsAttributes
{
  declare id: number
  declare name: string | null
  declare isActive: string | null
}

export function initCrmCronsEntity(sequelize: Sequelize): typeof CrmCronsEntity {
  CrmCronsEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(200),
        field: 'name',
        allowNull: true,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'crm_crons',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return CrmCronsEntity
}
