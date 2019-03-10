/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MUCore_Ban', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ban_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ban_date: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ban_expire: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ban_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ban_permanent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'MUCore_Ban'
  });
};
