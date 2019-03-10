/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_Gens', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Influence: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Reward: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    Class: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    LeaveDate: {
      type: "SMALLDATETIME",
      allowNull: true
    }
  }, {
    tableName: 'IGC_Gens'
  });
};
