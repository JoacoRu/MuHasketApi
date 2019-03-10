/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MUCore_Change_Passwords', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    expire: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    memb___id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'MUCore_Change_Passwords'
  });
};
