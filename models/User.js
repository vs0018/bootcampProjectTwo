var Sequelize = require("sequelize");
var sequelize = require("../config/config.js");

var User = sequelize.define("user", {
  userID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  userAlias: Sequelize.STRING,
  userLast: Sequelize.STRING,
  userFirst: Sequelize.STRING,
  userDOB: Sequelize.DATEONLY,
  userCity: Sequelize.STRING,
  userState: Sequelize.STRING,
  userZip: Sequelize.INTEGER,
  userPhone: Sequelize.INTEGER,
  userEmail: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  userInstagram: Sequelize.STRING,
  userTwitter: Sequelize.STRING,
  userFacebook: Sequelize.STRING,
  userVenmo: Sequelize.STRING,
  userInterests: Sequelize.STRING,
  userEmergencyContactName: Sequelize.STRING,
  userEmergencyContactPhone: Sequelize.INTEGER,
  userHasCarYN: Sequelize.BOOLEAN,
  userEnglishYN: Sequelize.BOOLEAN,
  userSpanishYN: Sequelize.BOOLEAN,
  userChineseYN: Sequelize.BOOLEAN,
  userHindiYN: Sequelize.BOOLEAN,
  userTeluguYN: Sequelize.BOOLEAN,
  userTamilYN: Sequelize.BOOLEAN,
  userGermanYN: Sequelize.BOOLEAN,
  userDutchYN: Sequelize.BOOLEAN,
  userItalianYn: Sequelize.BOOLEAN,
  userFrenchYN: Sequelize.BOOLEAN,
  userRussianYN: Sequelize.BOOLEAN,
  userOtherLanguageYN: Sequelize.BOOLEAN
});

User.sync();

module.exports = User;
