/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Mu_DBID', {
    DESC: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Version: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    }
  }, {
    tableName: 'Mu_DBID'
  });
};
