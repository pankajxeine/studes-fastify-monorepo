"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubPackageUserTiersEntity = void 0;
exports.initSubPackageUserTiersEntity = initSubPackageUserTiersEntity;
const sequelize_1 = require("sequelize");
class SubPackageUserTiersEntity extends sequelize_1.Model {
}
exports.SubPackageUserTiersEntity = SubPackageUserTiersEntity;
function initSubPackageUserTiersEntity(sequelize) {
    SubPackageUserTiersEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        subPackageId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_package_id',
            allowNull: true,
        },
        userTierId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'user_tier_id',
            allowNull: true,
        },
        additionalUsers: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'additional_users',
            allowNull: true,
        },
        additionalUserPrice: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            field: 'additional_user_price',
            allowNull: true,
        },
        purchasedTerms: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'purchased_terms',
            allowNull: true,
        },
        cancelDate: {
            type: sequelize_1.DataTypes.DATE,
            field: 'cancel_date',
            allowNull: true,
        },
        cancelTerms: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'cancel_terms',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: true,
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'sub_package_user_tiers',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return SubPackageUserTiersEntity;
}
