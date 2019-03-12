Activity.associate = function(models) {
  Activity.belongsTo(models.Event, { foreignKey: "eventID" });
  Activity.hasOne(models.Category, { foreignKey: "categoryID" });
};

Attendee.associate = function(models) {
  Attendee.belongsToMany(models.Event, { through: models.EventAttendance });
  // Event.belongsToMany(models.Attendee, { through: models.EventAttendance });
};

Category.associate = function(models) {
  Category.hasMany(models.Activity, { foreignKey: "categoryID" });
};

EventAttendance.associate = function(models) {
  // Attendee.belongsToMany(models.Event, { through: models.EventAttendance });
  Event.belongsToMany(models.Attendee, { through: models.EventAttendance });
  // EventAttendance.hasMany(models.AttendeeReating, { through: '' });
  Event.hasMany(models.Attendee, { through: "EventAttendance" });
};

EventAttendanceRating.associate = function(models) {
  EventAttendeeRatings.belongsToMany(models.Event, {
    through: models.EventAttendance
  });
  EventAttendeeRatings.belongsToMany(models.Attendee, {
    through: models.EventAttendance
  });
};
