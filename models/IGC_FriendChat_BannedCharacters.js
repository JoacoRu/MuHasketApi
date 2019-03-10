/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_FriendChat_BannedCharacters', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'IGC_FriendChat_BannedCharacters'
  });
};
