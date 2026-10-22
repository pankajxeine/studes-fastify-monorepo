import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FeatureFieldsAttributes = {
  id?: string | number | null
  moduleBlockId?: number | null
  fieldName?: string | null
  fieldKey?: string | null
  isRequired?: string
}

export type FeatureFieldsCreationAttributes = Optional<FeatureFieldsAttributes, "id" | "moduleBlockId" | "fieldName" | "fieldKey" | "isRequired">

export class FeatureFieldsEntity
  extends Model<FeatureFieldsAttributes, FeatureFieldsCreationAttributes>
  implements FeatureFieldsAttributes
{
  declare id: string | number | null
  declare moduleBlockId: number | null
  declare fieldName: string | null
  declare fieldKey: string | null
  declare isRequired: string
}

export function initFeatureFieldsEntity(sequelize: Sequelize): typeof FeatureFieldsEntity {
  FeatureFieldsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      moduleBlockId: {
        type: DataTypes.TEXT,
        field: 'module_block_id',
        allowNull: true,
        references: { model: 'module_blocks', key: 'id' },
      },
      fieldName: {
        type: DataTypes.STRING(22),
        field: 'field_name',
        allowNull: true,
      },
      fieldKey: {
        type: DataTypes.STRING(35),
        field: 'field_key',
        allowNull: true,
      },
      isRequired: {
        type: DataTypes.TEXT,
        field: 'is_required',
        allowNull: false,
        defaultValue: "TRUE",
      }
    },
    {
      sequelize,
      tableName: 'feature_fields',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return FeatureFieldsEntity
}
