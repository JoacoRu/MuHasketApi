/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MUCore_Cron_Jobs', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cron_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    next_cron: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cron_time_set: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'MUCore_Cron_Jobs'
  });
};
