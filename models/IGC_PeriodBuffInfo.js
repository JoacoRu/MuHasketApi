/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_PeriodBuffInfo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CharacterName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BuffIndex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EffectType1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EffectType2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExpireDate: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'IGC_PeriodBuffInfo'
  });
};
