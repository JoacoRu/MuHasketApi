/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_FriendMail', {
    MemoIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((10))',
      primaryKey: true
    },
    GUID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FriendName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    wDate: {
      type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: '(getdate())'
    },
    Subject: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bRead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    Memo: {
      type: "VARBINARY",
      allowNull: true
    },
    Photo: {
      type: "BINARY",
      allowNull: true
    },
    Dir: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Act: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'T_FriendMail'
  });
};
