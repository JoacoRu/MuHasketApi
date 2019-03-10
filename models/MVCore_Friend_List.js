/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Friend_List', {
    friend_uid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    to_who_uid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    friend_rewarded: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Friend_List'
  });
};
