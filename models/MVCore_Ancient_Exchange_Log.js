/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Ancient_Exchange_Log', {
    ItemHex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memb___id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CreditsGot: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Ancient_Exchange_Log'
  });
};
