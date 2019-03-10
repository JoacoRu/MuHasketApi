/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_BlockChat', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BlockedName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'IGC_BlockChat'
  });
};
