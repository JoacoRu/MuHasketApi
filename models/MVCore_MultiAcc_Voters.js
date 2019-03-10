/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_MultiAcc_Voters', {
    memb___id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    votes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MVCore_MultiAcc_Voters'
  });
};
