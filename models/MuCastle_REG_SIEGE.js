/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MuCastle_REG_SIEGE', {
    MAP_SVR_GROUP: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    REG_SIEGE_GUILD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    REG_MARKS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IS_GIVEUP: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SEQ_NUM: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'MuCastle_REG_SIEGE'
  });
};
