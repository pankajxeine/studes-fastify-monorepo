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
        },
        sub_package_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_package_id',
            allowNull: true,
        },
        user_tier_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'user_tier_id',
            allowNull: true,
        },
        additional_users: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'additional_users',
            allowNull: true,
        },
        additional_user_price: {
            type: sequelize_1.DataTypes.DECIMAL(4, 3),
            field: 'additional_user_price',
            allowNull: true,
            defaultValue: null,
        },
        purchased_terms: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'purchased_terms',
            allowNull: true,
            defaultValue: null,
        },
        cancel_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'cancel_date',
            allowNull: true,
            defaultValue: null,
        },
        cancel_terms: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'cancel_terms',
            allowNull: true,
            defaultValue: null,
        },
        created_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_at',
            allowNull: true,
            defaultValue: null,
        },
        updated_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'updated_at',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'sub_package_user_tiers',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return SubPackageUserTiersEntity;
}
