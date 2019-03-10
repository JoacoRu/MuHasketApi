/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Guild', {
    G_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    G_Mark: {
      type: "VARBINARY",
      allowNull: true
    },
    G_Score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    G_Master: {
      type: DataTypes.STRING,
      allowNull: true
    },
    G_Count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    G_Notice: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    G_Type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    G_Rival: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    G_Union: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    G_Warehouse: {
      type: "VARBINARY",
      allowNull: true
    },
    G_WHPassword: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    G_WHMoney: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'Guild'
  });
};
