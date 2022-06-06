import { DataTypes } from 'sequelize';
import { v4 as uuid } from 'uuid';
import BaseModel from './BaseModel.js';

export default class Budget extends BaseModel {
    static modelName = 'budget';
    static tableName = 'budget';
    static protectedKeys = ['createdAt', 'updatedAt'];

    static Schema = {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subscription: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }

    static Settings = {
        // define validators, indexes, hooks and etc here
        hooks: {
            async beforeCreate(budget) {
                budget.id = uuid();
            },
        },
    }
}
