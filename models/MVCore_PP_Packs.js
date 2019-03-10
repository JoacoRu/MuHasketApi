/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_PP_Packs', {
    pack_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cost_eur: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cost_usd: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cost_gbp: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_PP_Packs'
  });
};
