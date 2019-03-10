/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GuildMember', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    G_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Guild',
        key: 'G_Name'
      }
    },
    G_Level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    G_Status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'GuildMember'
  });
};
