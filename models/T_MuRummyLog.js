/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_MuRummyLog', {
    mDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'T_MuRummyLog'
  });
};
