/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MuCastle_DATA', {
    MAP_SVR_GROUP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SIEGE_START_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SIEGE_END_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SIEGE_GUILDLIST_SETTED: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    SIEGE_ENDED: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    CASTLE_OCCUPY: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    OWNER_GUILD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MONEY: {
      type: "MONEY",
      allowNull: false,
      defaultValue: '((0))'
    },
    TAX_RATE_CHAOS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAX_RATE_STORE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TAX_HUNT_ZONE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MuCastle_DATA'
  });
};
