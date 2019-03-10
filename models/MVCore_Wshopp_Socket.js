/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Wshopp_Socket', {
    sok_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sok_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    sok_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    sok_element: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sok_on_off: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MVCore_Wshopp_Socket'
  });
};
