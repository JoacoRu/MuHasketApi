/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Market_Sold_Items', {
    hex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memb___id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    soldto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Market_Sold_Items'
  });
};
