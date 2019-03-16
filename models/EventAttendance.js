module.exports = function (sequelize, Sequelize) {
  var EventAttendance = sequelize.define("EventAttendance", {});


  // EventAttendance.associate = (models) => {
  //   EventAttendance.hasOne(models.User, { foreignKey: 'userID' });
  //   EventAttendance.hasOne(models.Event, { foreignKey: 'eventID' });
  //   console.log('eventatt assoc');
  // };



  // module.exports = function (sequelize, Sequelize) {
  //   var EventAttendance = sequelize.define("EventAttendance", {
  //     eventAttendanceID: {
  //       type: Sequelize.INTEGER,
  //       primaryKey: true,
  //       autoIncrement: true
  //     },

  //     eventAttendanceInterestedYN: Sequelize.BOOLEAN,
  //     eventAttendanceInterestedDatetime: Sequelize.DATE,
  //     eventAttendanceRegisteredYN: Sequelize.BOOLEAN,
  //     eventAttendanceRegisteredDatetime: Sequelize.DATE,
  //     eventAttendanceConfirmedYN: Sequelize.BOOLEAN,
  //     eventAttendanceConfirmedDatetime: Sequelize.DATE,
  //     eventAttendancePresentYN: Sequelize.BOOLEAN,
  //     eventAttendancePresentDatetime: Sequelize.DATE,
  //     eventAttendanceRatingOverall: Sequelize.FLOAT,
  //     eventAttendanceRatingVenue: Sequelize.FLOAT,
  //     eventAttendanceRatingValue: Sequelize.FLOAT,
  //     eventAttendanceRatingFun: Sequelize.FLOAT,
  //     eventAttendanceRatingOtherAttendees: Sequelize.FLOAT
  //   });







  return EventAttendance;
  // .sync();
};
