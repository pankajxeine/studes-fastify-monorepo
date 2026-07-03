"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplateModulesEntity = void 0;
exports.initEmailTemplateModulesEntity = initEmailTemplateModulesEntity;
const sequelize_1 = require("sequelize");
class EmailTemplateModulesEntity extends sequelize_1.Model {
}
exports.EmailTemplateModulesEntity = EmailTemplateModulesEntity;
function initEmailTemplateModulesEntity(sequelize) {
    EmailTemplateModulesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        module: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'module',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'email_template_modules',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return EmailTemplateModulesEntity;
}
