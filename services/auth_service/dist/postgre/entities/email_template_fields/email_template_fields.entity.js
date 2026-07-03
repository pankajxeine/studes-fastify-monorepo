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
        },
        email_template_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'email_template_id',
            allowNull: true,
        },
        field_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'field_name',
            allowNull: true,
            defaultValue: null,
        },
        field_short_code: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'field_short_code',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'email_template_fields',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return EmailTemplateFieldsEntity;
}
