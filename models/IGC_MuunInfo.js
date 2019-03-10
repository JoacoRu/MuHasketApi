/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_MuunInfo', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MuunItemType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MuunItemSerial: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ConditionType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ConditionReq: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ConditionVal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AddOptCheckType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AddOptStartTime: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    AddOptExpireTime: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'IGC_MuunInfo'
  });
};
