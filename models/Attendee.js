

module.exports = function (sequelize, Sequelize) {
  var Attendee = sequelize.define("Attendee", {
    attendeeID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    attendeeAlias: Sequelize.STRING,
    attendeeLast: Sequelize.STRING,
    attendeeFirst: Sequelize.STRING,
    attendeeDOB: Sequelize.DATEONLY,
    attendeeCity: Sequelize.STRING,
    attendeeState: Sequelize.STRING,
    attendeeZip: Sequelize.INTEGER,
    attendeePhone: Sequelize.INTEGER,
    attendeeEmail: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    
    attendeeInstagram: Sequelize.STRING,
    attendeeTwitter: Sequelize.STRING,
    attendeeFacebook: Sequelize.STRING,
    attendeeVenmo: Sequelize.STRING,
    attendeeInterests: Sequelize.STRING,
    attendeeEmergencyContactName: Sequelize.STRING,
    attendeeEmergencyContactPhone: Sequelize.INTEGER,
    attendeeHasCarYN: Sequelize.BOOLEAN,
    attendeePhotoURL: Sequelize.STRING,

    attendeeRatingOverall: Sequelize.FLOAT,
    attendeeRatingSportstmanship: Sequelize.FLOAT,
    attendeeRatingAttitude: Sequelize.FLOAT,
    attendeeRatingSkill: Sequelize.FLOAT,
    attendeeRatingTimeliness: Sequelize.FLOAT,
    attendeeRatingAggressive: Sequelize.FLOAT,
    attendeeRatingThreateningYN: Sequelize.BOOLEAN

    attendeeEnglishYN: Sequelize.BOOLEAN,
    attendeeSpanishYN: Sequelize.BOOLEAN,
    attendeeChineseYN: Sequelize.BOOLEAN,
    attendeeHindiYN: Sequelize.BOOLEAN,
    attendeeTeluguYN: Sequelize.BOOLEAN,
    attendeeTamilYN: Sequelize.BOOLEAN,
    attendeeGermanYN: Sequelize.BOOLEAN,
    attendeeDutchYN: Sequelize.BOOLEAN,
    attendeeItalianYn: Sequelize.BOOLEAN,
    attendeeFrenchYN: Sequelize.BOOLEAN,
    attendeeRussianYN: Sequelize.BOOLEAN,
    attendeeOtherLanguageYN: Sequelize.BOOLEAN
  });

  Attendee.associate = function (models) {

    Attendee.belongsToMany(models.Event, { through: 'EventAttendance' });

  };

  return Attendee.sync();
};

