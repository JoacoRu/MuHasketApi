/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_Event_Inventory', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Inventory: {
      type: "VARBINARY",
      allowNull: true
    }
  }, {
    tableName: 'T_Event_Inventory'
  });
};
