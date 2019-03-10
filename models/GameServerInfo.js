/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GameServerInfo', {
    Number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    ItemCount: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ZenCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    GmItemCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AceItemCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GensRankingMonth: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((1))'
    }
  }, {
    tableName: 'GameServerInfo'
  });
};
