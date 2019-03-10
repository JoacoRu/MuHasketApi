/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_CancelItemSale', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ItemNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SellDate: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    SellExpireDate: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    SellPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemData: {
      type: "BINARY",
      allowNull: false
    }
  }, {
    tableName: 'IGC_CancelItemSale'
  });
};
