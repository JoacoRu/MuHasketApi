/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_PentagramInfo', {
    UserGuid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AccountID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    JewelPos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    JewelIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((255))'
    },
    ItemType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((255))'
    },
    ItemIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((511))'
    },
    MainAttribute: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((255))'
    },
    JewelLevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Rank1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((255))'
    },
    Rank1Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rank2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((255))'
    },
    Rank2Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rank3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((255))'
    },
    Rank3Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rank4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((255))'
    },
    Rank4Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rank5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((255))'
    },
    Rank5Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RegDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'T_PentagramInfo'
  });
};
