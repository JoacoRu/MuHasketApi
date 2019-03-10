/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MuCastle_NPC', {
    MAP_SVR_GROUP: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPC_NUMBER: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPC_INDEX: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPC_DF_LEVEL: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPC_RG_LEVEL: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPC_MAXHP: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPC_HP: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPC_X: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPC_Y: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPC_DIR: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPC_CREATEDATE: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'MuCastle_NPC'
  });
};
