/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PetWarehouse', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Items: {
      type: "VARBINARY",
      allowNull: true
    },
    DbVersion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubEquip: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'PetWarehouse'
  });
};
