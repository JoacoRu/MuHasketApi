/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_ARCA_BATTLE_MEMBER_JOIN_INFO', {
    G_Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CharName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    JoinDate: {
      type: "SMALLDATETIME",
      allowNull: true
    }
  }, {
    tableName: 'IGC_ARCA_BATTLE_MEMBER_JOIN_INFO'
  });
};
