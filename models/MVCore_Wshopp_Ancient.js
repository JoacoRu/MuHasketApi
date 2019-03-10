/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Wshopp_Ancient', {
    anc_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    anc_name2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_cat: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Wshopp_Ancient'
  });
};
