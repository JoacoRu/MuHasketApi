/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Market_Items', {
    hex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serial: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    soldby: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ptype: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Market_Items'
  });
};
