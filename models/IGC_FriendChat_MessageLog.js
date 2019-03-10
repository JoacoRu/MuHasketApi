/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_FriendChat_MessageLog', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FriendName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Date: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'IGC_FriendChat_MessageLog'
  });
};
