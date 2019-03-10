/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vCharacterPreview', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Inventory: {
      type: "VARBINARY",
      allowNull: true
    },
    CtlCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'vCharacterPreview'
  });
};
