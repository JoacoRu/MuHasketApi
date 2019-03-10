/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_InGameShop_Point', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    WCoinP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0.00))'
    },
    WCoinC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0.00))'
    },
    GoblinPoint: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0.00))'
    }
  }, {
    tableName: 'T_InGameShop_Point'
  });
};
