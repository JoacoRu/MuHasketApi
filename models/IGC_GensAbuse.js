/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_GensAbuse', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    KillName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    KillCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'IGC_GensAbuse'
  });
};
