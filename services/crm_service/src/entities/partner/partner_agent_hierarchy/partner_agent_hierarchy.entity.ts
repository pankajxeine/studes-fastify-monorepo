import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PartnerAgentHierarchyAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  ancestorId: string
  descendantId: string
  depth: number
  UNIQUE?: string | null
}

export type PartnerAgentHierarchyCreationAttributes = Optional<PartnerAgentHierarchyAttributes, "id" | "publicId" | "recordCode" | "UNIQUE">

export class PartnerAgentHierarchyEntity
  extends Model<PartnerAgentHierarchyAttributes, PartnerAgentHierarchyCreationAttributes>
  implements PartnerAgentHierarchyAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare ancestorId: string
  declare descendantId: string
  declare depth: number
  declare UNIQUE: string | null
}

export function initPartnerAgentHierarchyEntity(sequelize: Sequelize): typeof PartnerAgentHierarchyEntity {
  PartnerAgentHierarchyEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('partner_agent_hierarchy')"),
      },
      ancestorId: {
        type: DataTypes.TEXT,
        field: 'ancestor_id',
        allowNull: false,
        references: { model: 'partner_sales_agent', key: 'sales_agent_id' },
        onDelete: 'CASCADE',
      },
      descendantId: {
        type: DataTypes.TEXT,
        field: 'descendant_id',
        allowNull: false,
        references: { model: 'partner_sales_agent', key: 'sales_agent_id' },
        onDelete: 'CASCADE',
      },
      depth: {
        type: DataTypes.SMALLINT,
        field: 'depth',
        allowNull: false,
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'partner_agent_hierarchy',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return PartnerAgentHierarchyEntity
}
