/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_QUEST_EXP_INFO', {
    nINDEX: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CHAR_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    EPISODE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    QUEST_SWITCH: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ASK_INDEX: {
      type: "VARBINARY",
      allowNull: false,
      defaultValue: '((0))'
    },
    ASK_VALUE: {
      type: "VARBINARY",
      allowNull: false,
      defaultValue: '((0))'
    },
    ASK_STATE: {
      type: "VARBINARY",
      allowNull: false,
      defaultValue: '((0))'
    },
    PROG_STATE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    QUEST_START_DATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '((0))'
    },
    QUEST_END_DATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '((0))'
    },
    StartDateConvert: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    EndDateConvert: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'T_QUEST_EXP_INFO'
  });
};
