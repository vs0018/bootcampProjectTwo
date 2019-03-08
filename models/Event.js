// module.exports = function (sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };



// Dependencies
// =============================================================

var Sequelize = require("sequelize");
var sequelize = require("../config/config.js");

var Event = sequelize.define("event", {
  eventID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },

  eventName: Sequelize.STRING,

  eventDescription: Sequelize.STRING,
  eventAddress1: Sequelize.STRING,
  eventAddress2: Sequelize.STRING,
  eventAddress3: Sequelize.STRING,
  eventCity: Sequelize.STRING,
  eventState: Sequelize.STRING,
  eventZip: Sequelize.INTEGER,
  eventStartDatetime: Sequelize.DATE,
  eventEndDatetime: Sequelize.DATE,

  // eventAttendanceID: Sequelize.STRING,

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

// Event.hasOne(activities, { 
//   foreignKey: 'eventActivityID' 
// }),


Event.sync();

module.exports = Event;
