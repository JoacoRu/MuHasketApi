/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Wshopp_Harmony', {
    joh_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    joh_val: {
      type: DataTypes.STRING,
      allowNull: false
    },
    joh_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    joh_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    joh_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    joh_onoff: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MVCore_Wshopp_Harmony'
  });
};
