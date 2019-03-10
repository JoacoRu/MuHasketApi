/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_EvoMonRanking', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    TotalScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    TotalDamage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    LastSummonDate: {
      type: "SMALLDATETIME",
      allowNull: false
    }
  }, {
    tableName: 'IGC_EvoMonRanking'
  });
};
