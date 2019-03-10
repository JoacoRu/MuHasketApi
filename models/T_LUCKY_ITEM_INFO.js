/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_LUCKY_ITEM_INFO', {
    nIndex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserGuid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CharName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    ItemCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ItemSerial: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    DurabilitySmall: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'T_LUCKY_ITEM_INFO'
  });
};
