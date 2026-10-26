"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinConcessionTypeEntity = void 0;
exports.initFinConcessionTypeEntity = initFinConcessionTypeEntity;
const sequelize_1 = require("sequelize");
class FinConcessionTypeEntity extends sequelize_1.Model {
}
exports.FinConcessionTypeEntity = FinConcessionTypeEntity;
function initFinConcessionTypeEntity(sequelize) {
    FinConcessionTypeEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_concession_type')"),
        },
        concessionTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'concession_type_code',
            allowNull: true,
            unique: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        defaultDiscountKind: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'default_discount_kind',
            allowNull: false,
            defaultValue: "percent",
        },
        defaultDiscountValue: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'default_discount_value',
            allowNull: false,
            defaultValue: 0,
        },
        requiresDocument: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requires_document',
            allowNull: false,
            defaultValue: false,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'fin_concession_type',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['name'] }
        ]
    });
    return FinConcessionTypeEntity;
}
