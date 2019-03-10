/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_GremoryCase', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    StorageType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RewardSource: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AuthCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemGUID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemLevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemDurability: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemOp1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemOp2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemOp3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemExcOption: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemSetOption: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemSocket1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemSocket2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemSocket3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemSocket4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemSocket5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemMainAttribute: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemMuunEvoItemType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemMuunEvoItemIndex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ReceiveDate: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ExpireDate: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'IGC_GremoryCase'
  });
};
