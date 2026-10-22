import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ModuleFieldsAttributes = {
  id?: string | number | null
  industryId: string | number
  moduleId: string | number
  moduleKey: string
  blockId: string | number
  blockKey: string
  tableName: string
  fieldLabel: string
  fieldName: string
  fieldType: string
  fieldKey: string
  importIsRequired?: string
  exportIsRequired?: string
  isSkipped?: string
  sequence?: number
  createdAt?: Date
  updatedAt?: Date
}

export type ModuleFieldsCreationAttributes = Optional<ModuleFieldsAttributes, "id" | "importIsRequired" | "exportIsRequired" | "isSkipped" | "sequence" | "createdAt" | "updatedAt">

export class ModuleFieldsEntity
  extends Model<ModuleFieldsAttributes, ModuleFieldsCreationAttributes>
  implements ModuleFieldsAttributes
{
  declare id: string | number | null
  declare industryId: string | number
  declare moduleId: string | number
  declare moduleKey: string
  declare blockId: string | number
  declare blockKey: string
  declare tableName: string
  declare fieldLabel: string
  declare fieldName: string
  declare fieldType: string
  declare fieldKey: string
  declare importIsRequired: string
  declare exportIsRequired: string
  declare isSkipped: string
  declare sequence: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initModuleFieldsEntity(sequelize: Sequelize): typeof ModuleFieldsEntity {
  ModuleFieldsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      industryId: {
        type: DataTypes.BIGINT,
        field: 'industry_id',
        allowNull: false,
      },
      moduleId: {
        type: DataTypes.BIGINT,
        field: 'module_id',
        allowNull: false,
        references: { model: 'modules', key: 'id' },
      },
      moduleKey: {
        type: DataTypes.STRING(50),
        field: 'module_key',
        allowNull: false,
      },
      blockId: {
        type: DataTypes.BIGINT,
        field: 'block_id',
        allowNull: false,
      },
      blockKey: {
        type: DataTypes.STRING(50),
        field: 'block_key',
        allowNull: false,
      },
      tableName: {
        type: DataTypes.STRING(50),
        field: 'table_name',
        allowNull: false,
      },
      fieldLabel: {
        type: DataTypes.STRING(50),
        field: 'field_label',
        allowNull: false,
      },
      fieldName: {
        type: DataTypes.STRING(50),
        field: 'field_name',
        allowNull: false,
      },
      fieldType: {
        type: DataTypes.STRING(30),
        field: 'field_type',
        allowNull: false,
      },
      fieldKey: {
        type: DataTypes.STRING(50),
        field: 'field_key',
        allowNull: false,
      },
      importIsRequired: {
        type: DataTypes.TEXT,
        field: 'import_is_required',
        allowNull: false,
        defaultValue: "FALSE",
      },
      exportIsRequired: {
        type: DataTypes.TEXT,
        field: 'export_is_required',
        allowNull: false,
        defaultValue: "FALSE",
      },
      isSkipped: {
        type: DataTypes.TEXT,
        field: 'is_skipped',
        allowNull: false,
        defaultValue: "FALSE",
      },
      sequence: {
        type: DataTypes.INTEGER,
        field: 'sequence',
        allowNull: false,
        defaultValue: "0",
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
      tableName: 'module_fields',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['industry_id', 'module_id', 'block_id', 'field_label', 'field_name'] }
      ]
    }
  )
  return ModuleFieldsEntity
}
