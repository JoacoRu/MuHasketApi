/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_PG_Packs', {
    p_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currency: {
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
    }
  }, {
    tableName: 'MVCore_PG_Packs'
  });
};
