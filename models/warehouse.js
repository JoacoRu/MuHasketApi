/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('warehouse', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Items: {
      type: "VARBINARY",
      allowNull: true
    },
    Money: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    EndUseDate: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    pw: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Expanded: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    WHOpen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'warehouse'
  });
};
