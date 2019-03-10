/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Rew_Player', {
    hex_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Rew_Player'
  });
};
