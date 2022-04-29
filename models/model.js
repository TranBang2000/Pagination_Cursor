const { db, DataTypes } = require('../argument/connectDB');
const Test = db.define('tests', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt:{
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
});

module.exports = Test;
