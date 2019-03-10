/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_GMSystem', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    AuthorityMask: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Expiry: {
      type: "SMALLDATETIME",
      allowNull: true
    }
  }, {
    tableName: 'T_GMSystem'
  });
};
