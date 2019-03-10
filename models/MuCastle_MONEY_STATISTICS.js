/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MuCastle_MONEY_STATISTICS', {
    MAP_SVR_GROUP: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LOG_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    MONEY_CHANGE: {
      type: "MONEY",
      allowNull: false
    }
  }, {
    tableName: 'MuCastle_MONEY_STATISTICS'
  });
};
