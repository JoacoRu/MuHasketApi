/* jshint indent: 2 */
const sequelize = require('../db.init');
const Sequelize = require('sequelize');

 const Characters = sequelize.define('Character', {
    AccountID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    cLevel: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: '((1))'
    },
    LevelUpPoint: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Class: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Experience: {
      type: Sequelize.BIGINT,
      allowNull: true,
      defaultValue: '((0))'
    },
    Strength: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Dexterity: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Vitality: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Energy: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    MagicList: {
      type: "VARBINARY",
      allowNull: true
    },
    Money: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Life: {
      type: Sequelize.REAL,
      allowNull: true
    },
    MaxLife: {
      type: Sequelize.REAL,
      allowNull: true
    },
    Mana: {
      type: Sequelize.REAL,
      allowNull: true
    },
    MaxMana: {
      type: Sequelize.REAL,
      allowNull: true
    },
    MapNumber: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    MapPosX: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    MapPosY: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    MapDir: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    PkCount: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    PkLevel: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: '((3))'
    },
    PkTime: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    MDate: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    LDate: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    CtlCode: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Quest: {
      type: "VARBINARY",
      allowNull: true,
      defaultValue: '((0))'
    },
    Leadership: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ChatLimitTime: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    FruitPoint: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    RESETS: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Inventory: {
      type: "VARBINARY",
      allowNull: true
    },
    Married: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    MarryName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    mLevel: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    mlPoint: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    mlExperience: {
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    mlNextExp: {
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: '((0))'
    },
    InventoryExpansion: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    WinDuels: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    LoseDuels: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    PenaltyMask: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    BlockChatTime: {
      type: Sequelize.BIGINT,
      allowNull: true,
      defaultValue: '((0))'
    },
    Ruud: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    PlayGuide: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((1))'
    },
    Grand_Resets: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    mu_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    GM_ExpireD: {
      type: Sequelize.STRING,
      allowNull: true
    },
    sell_cost: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    selling_char: {
      type: Sequelize.STRING,
      allowNull: true
    },
    m_Grand_Resets: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Active_char: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'Character',
    timestamps: false
  });

  module.exports = Characters;