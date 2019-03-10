/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_CurCharName', {
    Name: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cDate: {
      type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'T_CurCharName'
  });
};
