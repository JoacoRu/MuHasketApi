/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_VIPList', {
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Date: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'T_VIPList'
  });
};
