/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Lottert_Data', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    lucky_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ticket_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MVCore_Lottert_Data'
  });
};
