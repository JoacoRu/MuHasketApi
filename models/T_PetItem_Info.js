/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('T_PetItem_Info', {
    ItemSerial: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Pet_Level: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Pet_Exp: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'T_PetItem_Info'
  });
};
