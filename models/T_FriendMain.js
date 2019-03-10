/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_FriendMain', {
    GUID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FriendCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MemoCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((10))'
    },
    MemoTotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'T_FriendMain'
  });
};
