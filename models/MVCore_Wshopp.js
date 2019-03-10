/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MVCore_Wshopp', {
    item_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    item_cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    zen_cost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    x: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    y: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    has_luck: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    has_skill: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_ancient: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_harmony: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_socket: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    has_refinery: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_excellent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clases: {
      type: DataTypes.STRING,
      allowNull: true
    },
    durability: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    equip_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    can_buy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    can_buy_w_money1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    can_buy_w_money2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    can_buy_w_zen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bought_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'MVCore_Wshopp'
  });
};
