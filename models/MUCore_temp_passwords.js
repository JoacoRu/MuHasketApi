/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MUCore_temp_passwords', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    memb_guid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    expire: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hash: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    memb___id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'MUCore_temp_passwords'
  });
};
