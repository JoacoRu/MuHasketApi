/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Money_Data', {
    Username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Credits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    GoldCredits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    VoteType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MVCore_Money_Data'
  });
};
