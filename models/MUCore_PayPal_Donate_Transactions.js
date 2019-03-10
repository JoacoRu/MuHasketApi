/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MUCore_PayPal_Donate_Transactions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transaction_id: {
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
    memb___id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    credits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_date: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    payer_email: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'MUCore_PayPal_Donate_Transactions'
  });
};
