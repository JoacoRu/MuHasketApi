/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MEMB_CREDITS', {
    memb___id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    credits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    used: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'MEMB_CREDITS'
  });
};
