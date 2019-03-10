/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ConnectionHistory', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    AccountID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ServerName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    State: {
      type: DataTypes.STRING,
      allowNull: true
    },
    HWID: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ConnectionHistory'
  });
};
