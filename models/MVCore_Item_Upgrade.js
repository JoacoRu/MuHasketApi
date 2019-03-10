/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Item_Upgrade', {
    item_original_hex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item_hex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memb___id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    int_time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    up_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Item_Upgrade'
  });
};
