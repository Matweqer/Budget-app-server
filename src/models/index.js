import { Sequelize } from 'sequelize';
import { dbConfig } from '../config/sequelize.js';

import Budget from "./Budget.js";

const {
  database, username, password, ...configs
} = dbConfig;
const sequelize = new Sequelize(database, username, password, configs);

Budget.initialize(sequelize)

export {
    sequelize,
    Sequelize,
    Budget
};
