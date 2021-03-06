const sequelize = require('../db.init');
const Sequelize = require('sequelize');

const Users = sequelize.define('dbo.MEMB_INFO', {
   memb__id: Sequelize.CHAR(10),
   memb__pwd: Sequelize.CHAR(20),
   memb_name: Sequelize.CHAR(10),
   sno__numb: Sequelize.CHAR(13),
   post_code: Sequelize.CHAR(13),
   addr_info: Sequelize.CHAR(50),
   addr_deta: Sequelize.CHAR(50),
   tel__numb: Sequelize.CHAR(15),
   phon__numb: Sequelize.CHAR(15),
   mail_addr: Sequelize.CHAR(50),
   fpas_ques: Sequelize.CHAR(50),
   fpas_answ: Sequelize.CHAR(50),
   job__code: Sequelize.CHAR(2),
   appl_days: Sequelize.TIME,
   modi_days: Sequelize.TIME,
   out__days: Sequelize.TIME,
   true_days: Sequelize.TIME,
   mail_check: Sequelize.CHAR(1),
   bloc_code: Sequelize.CHAR(1),
   ctl1_code: Sequelize.CHAR(1),
   cspoints: Sequelize.INTEGER,
   confirmed: Sequelize.INTEGER,
   SecretAnswer: Sequelize.CHAR(100),
   activation_id: Sequelize.CHAR(50),
   Gender: Sequelize.INTEGER,
   Country: Sequelize.INTEGER,
   SecretQuestion: Sequelize.CHAR(100),
   Vip: Sequelize.INTEGER,
   InicioVIP: Sequelize.CHAR(10),
   FinVip: Sequelize.CHAR(10),
   admincp: Sequelize.INTEGER,
   credits: Sequelize.INTEGER,
   credits2: Sequelize.INTEGER,
   m_Grand_Resets: Sequelize.INTEGER,
   acc_ip: Sequelize.CHAR(150),
   mvc_vip_date: Sequelize.CHAR(150),
   acc_info_text: Sequelize.TEXT,
   msponsor_limit: Sequelize.INTEGER,
   msponsor_date: Sequelize.CHAR(100),
   mvc_flag: Sequelize.CHAR(100),
   smtp_block: Sequelize.INTEGER,
   scrable_world: Sequelize.CHAR(255),
   scrable_original: Sequelize.CHAR(255),
   scrable_wrong: Sequelize.INTEGER,
   scrable_level: Sequelize.INTEGER,
},{
   tableName: 'dbo.MEMB_INFO'
});

sequelize.sync();

module.exports = Users;