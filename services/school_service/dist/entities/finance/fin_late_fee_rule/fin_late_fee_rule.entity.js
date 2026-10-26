"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinLateFeeRuleEntity = void 0;
exports.initFinLateFeeRuleEntity = initFinLateFeeRuleEntity;
const sequelize_1 = require("sequelize");
class FinLateFeeRuleEntity extends sequelize_1.Model {
}
exports.FinLateFeeRuleEntity = FinLateFeeRuleEntity;
function initFinLateFeeRuleEntity(sequelize) {
    FinLateFeeRuleEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_late_fee_rule')"),
        },
        lateFeeRuleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'late_fee_rule_id',
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
        feeHeadCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_head_code',
            allowNull: true,
            references: { model: 'fin_fee_head', key: 'fee_head_code' },
            onUpdate: 'CASCADE',
        },
        feeHeadScope: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'fee_head_scope',
            allowNull: true,
            autoIncrement: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        calcMethod: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'calc_method',
            allowNull: false,
        },
        graceDays: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'grace_days',
            allowNull: false,
            defaultValue: 0,
        },
        amount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'amount',
            allowNull: true,
        },
        percent: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'percent',
            allowNull: true,
        },
        maxAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'max_amount',
            allowNull: true,
        },
        validFrom: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'valid_from',
            allowNull: false,
        },
        validTo: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_to',
            allowNull: true,
        },
        validity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'validity',
            allowNull: true,
            autoIncrement: true,
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
        tableName: 'fin_late_fee_rule',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return FinLateFeeRuleEntity;
}
