import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IFAttributes = {

}

export type IFCreationAttributes = Optional<IFAttributes, never>

export class IFEntity
  extends Model<IFAttributes, IFCreationAttributes>
  implements IFAttributes
{

}

export function initIFEntity(sequelize: Sequelize): typeof IFEntity {
  IFEntity.init(
    {

    },
    {
      sequelize,
      tableName: 'IF',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return IFEntity
}
