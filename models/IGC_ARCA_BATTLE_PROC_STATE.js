/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_ARCA_BATTLE_PROC_STATE', {
    Proc_State: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'IGC_ARCA_BATTLE_PROC_STATE'
  });
};
