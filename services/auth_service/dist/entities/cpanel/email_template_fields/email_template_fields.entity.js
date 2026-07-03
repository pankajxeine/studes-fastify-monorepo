"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplateFieldsEntity = void 0;
exports.initEmailTemplateFieldsEntity = initEmailTemplateFieldsEntity;
const sequelize_1 = require("sequelize");
class EmailTemplateFieldsEntity extends sequelize_1.Model {
}
exports.EmailTemplateFieldsEntity = EmailTemplateFieldsEntity;
function initEmailTemplateFieldsEntity(sequelize) {
    EmailTemplateFieldsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        emailTemplateId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'email_template_id',
            allowNull: true,
        },
        fieldName: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'field_name',
            allowNull: true,
        },
        fieldShortCode: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'field_short_code',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'email_template_fields',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return EmailTemplateFieldsEntity;
}
