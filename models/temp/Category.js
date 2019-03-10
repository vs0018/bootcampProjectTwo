
module.exports = function (sequelize, Sequelize) {
  var Category = sequelize.define("Category", {
    categoryID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  
    categoryName: Sequelize.STRING,
    categoryPhysicalYN: Sequelize.BOOLEAN
  });


  return Category.sync();
};

