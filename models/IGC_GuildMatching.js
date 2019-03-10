/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_GuildMatching', {
    identNo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    GuildName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    GuildNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GuildMasterName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    GuildMasterLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GuildMasterClass: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GuildMemberCnt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Memo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    InterestType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    LevelRange: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    ClassType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    GensType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RegDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'IGC_GuildMatching'
  });
};
