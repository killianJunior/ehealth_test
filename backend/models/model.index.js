const dbConfig = require('../config/dbConfig');

const { Sequelize } = require('sequelize');

const _sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

  const testDbConnection = async () => {
    try {
      await _sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  const db = {};
  db.Sequelize = Sequelize;
  db._sequelize = _sequelize;
  
  db.testDbConnection = testDbConnection(); 

  db.patient = require('./patient.model')(_sequelize, Sequelize);
  db.vitals = require('./vital.model')(_sequelize, Sequelize);
  db.staff = require('./staff.model')(_sequelize, Sequelize);

  db.patient.hasMany(db.vitals, { as: "vitals" });
  db.vitals.belongsTo(db.patient, {
    foreignKey: "patientId",
    as: "patient",
  });


  module.exports = db;