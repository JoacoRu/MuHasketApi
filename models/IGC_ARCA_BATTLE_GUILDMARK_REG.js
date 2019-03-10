/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_ARCA_BATTLE_GUILDMARK_REG', {
    Index: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    G_Number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    G_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    G_Master: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RegDate: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    GuildRegRank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MarkCnt: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'IGC_ARCA_BATTLE_GUILDMARK_REG'
  });
};
