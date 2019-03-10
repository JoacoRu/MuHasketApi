/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Wshopp_Ancient_Opt', {
    anc_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    anc_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Wshopp_Ancient_Opt'
  });
};
