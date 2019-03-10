/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IGC_PartyMatching', {
    IdentNo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    PartyLeaderName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MinLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MaxLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HuntingGround: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WantedClass: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CurMemberCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AcceptType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UsePassWord: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    PassWord: {
      type: DataTypes.STRING,
      allowNull: true
    },
    WantedClassDetailInfo1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WantedClassDetailInfo2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WantedClassDetailInfo3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WantedClassDetailInfo4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WantedClassDetailInfo5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WantedClassDetailInfo6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WantedClassDetailInfo7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LeaderChannel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GensType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LeaderLevel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LeaderClass: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RegDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'IGC_PartyMatching'
  });
};
