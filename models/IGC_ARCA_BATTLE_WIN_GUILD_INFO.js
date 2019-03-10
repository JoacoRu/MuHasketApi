/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_ARCA_BATTLE_WIN_GUILD_INFO', {
    G_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    G_Number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    WinDate: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    OuccupyObelisk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObeliskGroup: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LeftTime: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'IGC_ARCA_BATTLE_WIN_GUILD_INFO'
  });
};
