"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranStopEntity = void 0;
exports.initTranStopEntity = initTranStopEntity;
const sequelize_1 = require("sequelize");
class TranStopEntity extends sequelize_1.Model {
}
exports.TranStopEntity = TranStopEntity;
function initTranStopEntity(sequelize) {
    TranStopEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('tran_stop')"),
        },
        stopId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'stop_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        code: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        landmark: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'landmark',
            allowNull: true,
        },
        addressLine: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'address_line',
            allowNull: true,
        },
        latitude: {
            type: sequelize_1.DataTypes.DECIMAL(9, 6),
            field: 'latitude',
            allowNull: true,
        },
        longitude: {
            type: sequelize_1.DataTypes.DECIMAL(9, 6),
            field: 'longitude',
            allowNull: true,
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
        tableName: 'tran_stop',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['campus_id', 'code'] }
        ]
    });
    return TranStopEntity;
}
