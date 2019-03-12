module.exports = function(sequelize, Sequelize, models) {
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

  Activity.associate = function(models) {
    Activity.hasMany(models.Event, { foreignKey: "activityID" });
  };

  Activity.associate = function(models) {
    Activity.belongsTo(models.Category, { foreignKey: "categoryID" });
  };

  // Activity.sync();

  return Activity;
};
