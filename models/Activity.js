module.exports = function (sequelize, Sequelize) {
  var Activity = sequelize.define("Activity", {
    activityID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    activityName: Sequelize.STRING,
    activityIndividualEquipmentNeeded: Sequelize.BOOLEAN,
    activitySharedEquipmentNeeded: Sequelize.BOOLEAN,
    activityEquipment: Sequelize.STRING
  });

  Activity.associate = function (models) {

    Activity.belongsTo(models.Event, { foreignKey: 'eventID' });
    Activity.hasOne(models.Category, { foreignKey: 'categoryID' });

  };

  return Activity.sync();
};

