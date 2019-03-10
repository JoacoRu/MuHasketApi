/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_HuntingLog', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MapNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    UserLevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HuntingTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DamageDeal: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ElementalDamageDeal: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    HealAmount: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    MonsterKillCount: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    GainExp: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'IGC_HuntingLog'
  });
};
