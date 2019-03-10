/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_MachineID_Banned', {
    HWID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Note: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'IGC_MachineID_Banned'
  });
};
