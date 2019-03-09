var Sequelize = require("sequelize");
var sequelize = require("../config/config.js");

var Activity = sequelize.define("activity", {
  activityID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // categoryID:,
  activityName: Sequelize.STRING,
  activityIndividualEquipmentNeeded: Sequelize.BOOLEAN,
  activitySharedEquipmentNeeded: Sequelize.BOOLEAN,
  activityEquipment: Sequelize.STRING
});

Activity.sync();

module.exports = Activity;
