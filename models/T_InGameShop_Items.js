/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_InGameShop_Items', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UniqueCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AuthCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UniqueID1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UniqueID2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UniqueID3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    InventoryType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GiftName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Message: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UsedItem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'T_InGameShop_Items'
  });
};
