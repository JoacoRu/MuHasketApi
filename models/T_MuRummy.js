/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_MuRummy', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mSequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mColor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mPosition: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'T_MuRummy'
  });
};
