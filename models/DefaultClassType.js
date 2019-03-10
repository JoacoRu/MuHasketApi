/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DefaultClassType', {
    Class: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Strength: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Dexterity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Vitality: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Energy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MagicList: {
      type: "VARBINARY",
      allowNull: true
    },
    Life: {
      type: DataTypes.REAL,
      allowNull: true
    },
    MaxLife: {
      type: DataTypes.REAL,
      allowNull: true
    },
    Mana: {
      type: DataTypes.REAL,
      allowNull: true
    },
    MaxMana: {
      type: DataTypes.REAL,
      allowNull: true
    },
    MapNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MapPosX: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MapPosY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Quest: {
      type: "VARBINARY",
      allowNull: true
    },
    DbVersion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Leadership: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    LevelUpPoint: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Inventory: {
      type: "VARBINARY",
      allowNull: true
    },
    LevelLife: {
      type: DataTypes.REAL,
      allowNull: true
    },
    LevelMana: {
      type: DataTypes.REAL,
      allowNull: true
    },
    VitalityToLife: {
      type: DataTypes.REAL,
      allowNull: true
    },
    EnergyToMana: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    tableName: 'DefaultClassType'
  });
};
