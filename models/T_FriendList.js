/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_FriendList', {
    GUID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FriendGuid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FriendName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Del: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'T_FriendList'
  });
};
