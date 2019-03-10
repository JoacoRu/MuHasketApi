/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_PlayerKiller_Info', {
    Victim: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Killer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    KillDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'C_PlayerKiller_Info'
  });
};
