/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('C_Monster_KillCount', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MonsterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'C_Monster_KillCount'
  });
};
