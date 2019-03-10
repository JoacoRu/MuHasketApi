/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ItemLog', {
    SEQ: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Acc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ItemCode: {
      type: "VARBINARY",
      allowNull: true
    },
    SN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iLvl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iSkill: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iLuck: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iExt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    iSet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    i380: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iJh: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SentDate: {
      type: "SMALLDATETIME",
      allowNull: true,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'ItemLog'
  });
};
