/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZenEvent', {
    Guid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Zen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'ZenEvent'
  });
};
