/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Wshopp_Item_Log', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.STRING,
      allowNull: false
    },
    boughtby: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Wshopp_Item_Log'
  });
};
