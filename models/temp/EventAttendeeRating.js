
module.exports = function (sequelize, Sequelize) {
  
  var EventAttendanceRating = sequelize.define("EventAttendanceRating", {
    eventAttendanceRatingOverall: Sequelize.FLOAT,
    eventAttendeeRatedSportstmanship: Sequelize.FLOAT,
    eventAttendeeRatedAttitude: Sequelize.FLOAT,
    eventAttendeeRatedSkill: Sequelize.FLOAT,
    eventAttendeeRatedTimeliness: Sequelize.FLOAT,
    eventAttendeeRatedAggressive: Sequelize.FLOAT,
    eventAttendeeRatedThreateningYN: Sequelize.BOOLEAN
  });



  return EventAttendanceRating.sync();
};
