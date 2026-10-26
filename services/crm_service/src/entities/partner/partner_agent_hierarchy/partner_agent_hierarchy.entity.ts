import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PartnerAgentHierarchyAttributes = {
  recordCode?: string
  agentHierarchyId: string | null
  ancestorId: string
  descendantId: string
  depth: number
}

export type PartnerAgentHierarchyCreationAttributes = Optional<PartnerAgentHierarchyAttributes, "recordCode">

export class PartnerAgentHierarchyEntity
  extends Model<PartnerAgentHierarchyAttributes, PartnerAgentHierarchyCreationAttributes>
  implements PartnerAgentHierarchyAttributes
{
  declare recordCode: string
  declare agentHierarchyId: string | null
  declare ancestorId: string
  declare descendantId: string
  declare depth: number
}

export function initPartnerAgentHierarchyEntity(sequelize: Sequelize): typeof PartnerAgentHierarchyEntity {
  PartnerAgentHierarchyEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('partner_agent_hierarchy')"),
      },
      agentHierarchyId: {
        type: DataTypes.TEXT,
        field: 'agent_hierarchy_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      }
    },
    {
      sequelize,
      tableName: 'partner_agent_hierarchy',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['ancestor_id', 'descendant_id'] }
      ]
    }
  )
  return PartnerAgentHierarchyEntity
}
