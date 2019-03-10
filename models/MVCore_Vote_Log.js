/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Vote_Log', {
    un_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vote_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vote_ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    votes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MVCore_Vote_Log'
  });
};
