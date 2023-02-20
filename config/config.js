const crmconnection = {
    // DB_HOST: '192.168.4.157',
    // DB_NAME: 'crmrevo_dev',
    // DB_USER: 'revo',
    // DB_PASSWORD: 'P@ssw0rd',
    // DB_Timeout_Min: 2,
    // DB_Timeout_Max: 30,
    // DB_Timeout_Total: 300000
    DB_HOST: process.env.DB_CRM_HOST,
    DB_NAME: process.env.DB_CRM_NAME,
    DB_USER: process.env.DB_CRM_USER,
    DB_PASSWORD: process.env.DB_CRM_PASSWORD,
    // DB_Timeout_Min: Number(process.env.DB_CRM_Timeout_Min),
    // DB_Timeout_Max: Number(process.env.DB_CRM_Timeout_Max),
    DB_Timeout_Total: Number(process.env.DB_CRM_Timeout_Total)
};

const icrmconnection = {
    // DB_HOST: '192.168.4.157',
    // DB_NAME: 'db_icrm',
    // DB_USER: 'revo',
    // DB_PASSWORD: 'P@ssw0rd',
    // DB_Timeout_Min: 2,
    // DB_Timeout_Max: 30,
    // DB_Timeout_Total: 300000
    DB_HOST: process.env.DB_ICRM_HOST,
    DB_NAME: process.env.DB_ICRM_NAME,
    DB_USER: process.env.DB_ICRM_USER,
    DB_PASSWORD: process.env.DB_ICRM_PASSWORD,
    // DB_Timeout_Min: Number(process.env.DB_ICRM_Timeout_Min),
    // DB_Timeout_Max: Number(process.env.DB_ICRM_Timeout_Max),
    DB_Timeout_Total: Number(process.env.DB_ICRM_Timeout_Total)
};

const Authenticationconnection = {
    // DB_HOST: '192.168.4.157',
    // DB_NAME: 'db_icrm',
    // DB_USER: 'revo',
    // DB_PASSWORD: 'P@ssw0rd',
    // DB_Timeout_Min: 2,
    // DB_Timeout_Max: 30,
    // DB_Timeout_Total: 300000
    DB_HOST: process.env.DB_Authentication_HOST,
    DB_NAME: process.env.DB_Authentication_NAME,
    DB_USER: process.env.DB_Authentication_USER,
    DB_PASSWORD: process.env.DB_Authentication_PASSWORD,
    DB_PORT: process.env.DB_Authentication_PORT,
    // DB_Timeout_Min: Number(process.env.DB_ICRM_Timeout_Min),
    // DB_Timeout_Max: Number(process.env.DB_ICRM_Timeout_Max),
    DB_Timeout_Total: Number(process.env.DB_Authentication_Timeout_Total)
};

module.exports = { crmconnection, icrmconnection , Authenticationconnection};