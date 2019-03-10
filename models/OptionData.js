/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OptionData', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    SkillKey: {
      type: "BINARY",
      allowNull: true
    },
    GameOption: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Qkey: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Wkey: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ekey: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ChatWindow: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((255))'
    },
    Rkey: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    QWERLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EnableChangeMode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    MuBot: {
      type: "VARBINARY",
      allowNull: true
    }
  }, {
    tableName: 'OptionData'
  });
};
