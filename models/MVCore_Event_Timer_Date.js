/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Event_Timer_Date', {
    event_timer_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Event_Timer_Date'
  });
};
