/* jshint indent: 2 */
const sequelize = require('../db.init');
const Sequelize = require('sequelize');


  const Users = sequelize.define('MEMB_INFO', {
    memb_guid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    memb___id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    memb__pwd: {
      type: Sequelize.STRING,
      allowNull: false
    },
    memb_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sno__numb: {
      type: Sequelize.CHAR,
      allowNull: false
    },
    post_code: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    addr_info: {
      type: Sequelize.STRING,
      allowNull: true
    },
    addr_deta: {
      type: Sequelize.STRING,
      allowNull: true
    },
    tel__numb: {
      type: Sequelize.STRING,
      allowNull: true
    },
    phon_numb: {
      type: Sequelize.STRING,
      allowNull: true
    },
    mail_addr: {
      type: Sequelize.STRING,
      allowNull: true
    },
    fpas_ques: {
      type: Sequelize.STRING,
      allowNull: true
    },
    fpas_answ: {
      type: Sequelize.STRING,
      allowNull: true
    },
    job__code: {
      type: Sequelize.CHAR,
      allowNull: true
    },
    appl_days: {
      type: Sequelize.DATE,
      allowNull: true
    },
    modi_days: {
      type: Sequelize.DATE,
      allowNull: true
    },
    out__days: {
      type: Sequelize.DATE,
      allowNull: true
    },
    true_days: {
      type: Sequelize.DATE,
      allowNull: true
    },
    mail_chek: {
      type: Sequelize.CHAR,
      allowNull: true,
      defaultValue: '((0))'
    },
    bloc_code: {
      type: Sequelize.CHAR,
      allowNull: false
    },
    ctl1_code: {
      type: Sequelize.CHAR,
      allowNull: false
    },
    cspoints: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    VipType: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    VipStart: {
      type: Sequelize.DATE,
      allowNull: true
    },
    VipDays: {
      type: Sequelize.DATE,
      allowNull: true
    },
    JoinDate: {
      type: Sequelize.STRING,
      allowNull: true
    },
    confirmed: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    SecretAnswer: {
      type: Sequelize.STRING,
      allowNull: true
    },
    activation_id: {
      type: Sequelize.STRING,
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
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Vip: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    InicioVIP: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '((0))'
    },
    FinVIP: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '((0))'
    },
    VipTipe: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    VipDate: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    VipINF: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '((0))'
    },
    admincp: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    credits: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    credits2: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    m_Grand_Resets: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    acc_ip: {
      type: Sequelize.STRING,
      allowNull: true
    },
    mvc_vip_date: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '((0))'
    },
    acc_info_text: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    msponsor_limit: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    msponsor_date: {
      type: Sequelize.STRING,
      allowNull: true
    },
    mvc_flag: {
      type: Sequelize.STRING,
      allowNull: true
    },
    smtp_block: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    scrable_word: {
      type: Sequelize.STRING,
      allowNull: true
    },
    scrable_original: {
      type: Sequelize.STRING,
      allowNull: true
    },
    scrable_wrong: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    scrable_level: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MEMB_INFO',
    timestamps: false
  });

  module.exports = Users;
