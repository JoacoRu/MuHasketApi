/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_PeriodItemInfo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserGUID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CharacterName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ItemType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ItemCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EffectCategory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EffectType1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EffectType2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Serial: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BuyDate: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ExpireDate: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    UsedInfo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BuyDateString: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    ExpireDateString: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    SetExpire: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'IGC_PeriodItemInfo'
  });
};
