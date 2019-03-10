




module.exports = function (sequelize, Sequelize) {
  var EventAttendance = sequelize.define("EventAttendance", {

    eventAttendanceID: {
      type: Sequelize.INTEGER,
      // primaryKey: true,
      autoIncrement: true
    },

    eventAttendanceInterestedYN: Sequelize.BOOLEAN,
    eventAttendanceInterestedDatetime: Sequelize.DATE,
    eventAttendanceRegisteredYN: Sequelize.BOOLEAN,
    eventAttendanceRegisteredDatetime: Sequelize.DATE,
    eventAttendanceConfirmedYN: Sequelize.BOOLEAN,
    eventAttendanceConfirmedDatetime: Sequelize.DATE,
    eventAttendancePresentYN: Sequelize.BOOLEAN,
    eventAttendancePresentDatetime: Sequelize.DATE,
    eventAttendanceRatingOverall: Sequelize.FLOAT,
    eventAttendanceRatingVenue: Sequelize.FLOAT,
    eventAttendanceRatingValue: Sequelize.FLOAT,
    eventAttendanceRatingFun: Sequelize.FLOAT,
    eventAttendanceRatingOtherAttendees: Sequelize.FLOAT
  });

  EventAttendance.associate = function (models) {

    Attendee.belongsToMany(models.Event, { through: EventAttendance });
    Event.belongsToMany(models.Attendee, { through: EventAttendance });

    // EventAttendance.hasMany(models.AttendeeReating, { through: '' });
    Event.hasMany(models.Attendee, { through: 'EventAttendance' });

  };

  return EventAttendance.sync();

};