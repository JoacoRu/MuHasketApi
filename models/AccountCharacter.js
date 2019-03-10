/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccountCharacter', {
    Number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    GameID1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GameID2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GameID3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GameID4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GameID5: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GameIDC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MoveCnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Summoner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    WarehouseExpansion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    RageFighter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    SecCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    SlotCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    }
  }, {
    tableName: 'AccountCharacter'
  });
};
