import Sequelize from 'sequelize';
import db from '../db.js';

const createUserModel = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  });
};

export default createUserModel(db, Sequelize.DataTypes);
