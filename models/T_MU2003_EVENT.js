/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_MU2003_EVENT', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    EventChips: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    MuttoIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((-1))'
    },
    MuttoNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Check_Code: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'T_MU2003_EVENT'
  });
};
