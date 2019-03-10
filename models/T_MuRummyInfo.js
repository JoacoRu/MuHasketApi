/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_MuRummyInfo', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mTotalScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'T_MuRummyInfo'
  });
};
