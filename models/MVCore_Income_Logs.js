/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Income_Logs', {
    Income_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost_value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Income_Logs'
  });
};
