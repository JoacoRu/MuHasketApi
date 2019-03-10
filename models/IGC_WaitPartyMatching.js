/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_WaitPartyMatching', {
    IdentNo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LeaderName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MemberName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MemberLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MemberDBNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RegDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'IGC_WaitPartyMatching'
  });
};
