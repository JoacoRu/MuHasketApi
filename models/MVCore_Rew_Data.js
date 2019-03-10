/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Rew_Data', {
    gm_nick: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false
    },
    information: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rew_to: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rew_toch: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'MVCore_Rew_Data'
  });
};
