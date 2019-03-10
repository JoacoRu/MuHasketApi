/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_EventEntryCount', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    EventEntryType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EventEntryDate: {
      type: "SMALLDATETIME",
      allowNull: false
    }
  }, {
    tableName: 'IGC_EventEntryCount'
  });
};
