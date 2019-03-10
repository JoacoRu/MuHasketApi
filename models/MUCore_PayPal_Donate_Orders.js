/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MUCore_PayPal_Donate_Orders', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    donate_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    credits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    memb___id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'MUCore_PayPal_Donate_Orders'
  });
};
