const { Sequelize, DataTypes, Op } = require('sequelize');

const db = new Sequelize(
  'Fake_Data',
  'root',
  '051200',
  {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+07:00',
  }
);

db.authenticate()
.then(() => {
  console.log('connected to database');
})
.catch(error=>console.log(`connect failed`))
;

module.exports = {
  db,
  Sequelize,
  DataTypes,
  Op,
};
