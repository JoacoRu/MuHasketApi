/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Tran_Log', {
    business: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currency_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    custom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoice: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MVCore_Tran_Log'
  });
};
