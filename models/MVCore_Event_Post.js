/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Event_Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game_master: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expire_date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Event_Post'
  });
};
