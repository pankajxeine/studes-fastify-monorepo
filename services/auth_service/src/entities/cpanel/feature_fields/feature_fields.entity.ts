import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FeatureFieldsAttributes = {
  id?: number | null
  moduleBlockId?: number | null
  fieldName?: string | null
  fieldKey?: string | null
  isRequired?: string | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

export type FeatureFieldsCreationAttributes = Optional<FeatureFieldsAttributes, "id" | "moduleBlockId" | "fieldName" | "fieldKey" | "isRequired" | "createdAt" | "updatedAt">

export class FeatureFieldsEntity
  extends Model<FeatureFieldsAttributes, FeatureFieldsCreationAttributes>
  implements FeatureFieldsAttributes
{
  declare id: number | null
  declare moduleBlockId: number | null
  declare fieldName: string | null
  declare fieldKey: string | null
  declare isRequired: string | null
  declare createdAt: Date | null
  declare updatedAt: Date | null
}

export function initFeatureFieldsEntity(sequelize: Sequelize): typeof FeatureFieldsEntity {
  FeatureFieldsEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
      },
      moduleBlockId: {
        type: DataTypes.TEXT,
        field: 'module_block_id',
        allowNull: true,
      },
      fieldName: {
        type: DataTypes.CHAR(22),
        field: 'field_name',
        allowNull: true,
      },
      fieldKey: {
        type: DataTypes.CHAR(35),
        field: 'field_key',
        allowNull: true,
      },
      isRequired: {
        type: DataTypes.TEXT,
        field: 'is_required',
        allowNull: true,
        defaultValue: "Yes",
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
      tableName: 'feature_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return FeatureFieldsEntity
}
