/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_MineSystem', {
    CharacterName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    TwinkleType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CurrentStage: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'T_MineSystem'
  });
};
