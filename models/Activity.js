module.exports = function (sequelize, Sequelize) {
  var Activity = sequelize.define("Activity", {
    activityID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    activityName: Sequelize.STRING,
    activityIndividualEquipmentNeeded: Sequelize.BOOLEAN,
    activitySharedEquipmentNeeded: Sequelize.BOOLEAN,
    activityEquipment: Sequelize.STRING
  });


  Activity.associate = function (models) {
    Activity.belongsTo(models.Event);
  };

  Activity.sync();

  return Activity;
};