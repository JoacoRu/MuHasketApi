/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MEMB_STAT', {
    memb___id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ConnectStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    ServerName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ConnectTM: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    DisConnectTM: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    OnlineHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MEMB_STAT'
  });
};
