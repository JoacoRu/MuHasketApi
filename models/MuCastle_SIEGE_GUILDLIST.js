/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MuCastle_SIEGE_GUILDLIST', {
    MAP_SVR_GROUP: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GUILD_NAME: {
      type: DataTypes.STRING,
      allowNull: false
    },
    GUILD_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GUILD_INVOLVED: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    GUILD_SCORE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MuCastle_SIEGE_GUILDLIST'
  });
};
