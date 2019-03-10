/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_WaitFriend', {
    GUID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FriendGuid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FriendName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'T_WaitFriend'
  });
};
