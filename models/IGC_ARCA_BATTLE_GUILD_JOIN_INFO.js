/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_ARCA_BATTLE_GUILD_JOIN_INFO', {
    G_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    G_Master: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    JoinDate: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    GroupNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'IGC_ARCA_BATTLE_GUILD_JOIN_INFO'
  });
};
