/* jshint indent: 2 */
const sequelize = require('../db.init');
const Sequelize = require('sequelize');

  const Users = sequelize.define('dbo.MEMB_INFO', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    memb__id: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    memb__pwd: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    memb_name: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    sno__numb: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    post_code: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    addr_info: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    addr_deta: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    tel__numb: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    phon__numb: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    mail_addr: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    fpas_ques: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    fpas_answ: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    job__code: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    appl_days: {
      type: Sequelize.TIME,
      allowNull: true
    },
    modi_days: {
      type: Sequelize.TIME,
      allowNull: true
    },
    out__days: {
      type: Sequelize.TIME,
      allowNull: true
    },
    true_days: {
      type: Sequelize.TIME,
      allowNull: true
    },
    mail_check: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    bloc_code: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    ctl1_code: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    cspoints: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    confirmed: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    SecretAnswer: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    activation_id: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    Gender: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Country: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    SecretQuestion: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    Vip: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    InicioVIP: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    FinVip: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    admincp: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    credits: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    credits2: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    m_Grand_Resets: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    acc_ip: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    mvc_vip_date: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    acc_info_text: {
      type: Sequelize.STRING,
      allowNull: true
    },
    msponsor_limit: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    msponsor_date: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    mvc_flag: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    smtp_block: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    scrable_world: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    scrable_original: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    scrable_wrong: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    scrable_level: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }, {
    tableName: 'dbo.MEMB_INFO'
  });

  module.exports = Users;