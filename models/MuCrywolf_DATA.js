/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MuCrywolf_DATA', {
    MAP_SVR_GROUP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CRYWOLF_OCCUFY: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CRYWOLF_STATE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CHAOSMIX_PLUS_RATE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CHAOSMIX_MINUS_RATE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MuCrywolf_DATA'
  });
};
