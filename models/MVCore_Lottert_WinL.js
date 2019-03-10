/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Lottert_WinL', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    credits: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    l_num: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Lottert_WinL'
  });
};
