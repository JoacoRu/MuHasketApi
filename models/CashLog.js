/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CashLog', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Amount: {
      type: "MONEY",
      allowNull: true
    },
    SentDate: {
      type: "SMALLDATETIME",
      allowNull: true,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'CashLog'
  });
};
