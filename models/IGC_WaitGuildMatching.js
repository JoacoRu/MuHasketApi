/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_WaitGuildMatching', {
    identNo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    GuildNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GuildName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    GuildMasterName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ApplicantName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ApplicantClass: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ApplicantLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RegDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'IGC_WaitGuildMatching'
  });
};
