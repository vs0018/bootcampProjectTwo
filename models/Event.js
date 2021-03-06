module.exports = function(sequelize, Sequelize, models) {
  var Event = sequelize.define("Event", {
    eventID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    eventOrganizer: Sequelize.INTEGER,
    eventName: Sequelize.STRING,
    eventLocationName: Sequelize.STRING,
    eventDescription: Sequelize.STRING,
    eventAddress1: Sequelize.STRING,
    eventAddress2: Sequelize.STRING,
    eventAddress3: Sequelize.STRING,
    eventCity: Sequelize.STRING,
    eventState: Sequelize.STRING,
    eventZip: Sequelize.INTEGER,
    eventStartDatetime: Sequelize.DATE,
    eventEndDatetime: Sequelize.DATE,
    eventPhoto: {
      type: Sequelize.STRING,
      defaultValue: "https://via.placeholder.com/350x250"
    },
    eventEquipmentNeededYN: Sequelize.BOOLEAN,
    eventEquipment: Sequelize.STRING,
    eventParkingAvailableYN: Sequelize.BOOLEAN,
    eventParkingFreeYN: Sequelize.BOOLEAN,
    eventParkingEase: Sequelize.INTEGER,
    eventCost: Sequelize.FLOAT,
    eventMinAge: Sequelize.INTEGER,
    eventMinAttendees: Sequelize.INTEGER,
    eventMaxAttendees: Sequelize.INTEGER,
    eventCancelledYN: Sequelize.BOOLEAN,
    eventCancellationDatetime: Sequelize.DATE,
    eventFoodYN: Sequelize.BOOLEAN,
    eventMinAttendeeRatingThreshold: Sequelize.FLOAT,
    eventSponsoredYN: Sequelize.BOOLEAN,
    eventSponsorName: Sequelize.STRING,
    eventFreeSwag: Sequelize.BOOLEAN,
    eventCreateDate: Sequelize.DATE,
    eventCanBringGuest: Sequelize.BOOLEAN,
    eventLocationPrivateYN: Sequelize.BOOLEAN,
    eventRegisteredAttendees: Sequelize.INTEGER,
    eventConfirmedAttendees: Sequelize.INTEGER,
    eventCelebrityAttendanceYN: Sequelize.BOOLEAN
  });

  // Event.associate = function(models) {
  //   Event.belongsTo(models.Activity, { foreignKey: "activityID" });
  // };

  Event.associate = function(models) {
    Event.belongsToMany(models.User, {
      through: "EventAttendance",
      foreignKey: "eventID"
    });
  };
  sequelize.sync();

  return Event;
};
