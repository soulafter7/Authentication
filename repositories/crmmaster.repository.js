const { CRM_sql, CRM_connection } = require("../db/crmconnection");;
const { ERROR_CONSTANT } = require('../utils/error');
const { knex } = require("../db/knexfile.js");;

exports.getMasterCenterList = async (ID, Key, GroupKey) => {
    try {
        let strQuery = "SELECT * FROM MST.MasterCenter WHERE IsDeleted = 0 AND IsActive = 1";

        let pool = await new CRM_sql.connect(CRM_connection);
        let sqlRequest = await pool.request();

        if (ID !== null && ID !== '') {
            strQuery = strQuery + " AND ID = @ID"
            sqlRequest.input("ID", ID);
        };

        if (Key !== null && Key !== '') {
            strQuery = strQuery + " AND [Key] = @Key"
            sqlRequest.input("Key", Key);
        };

        if (GroupKey !== null && GroupKey !== '') {
            strQuery = strQuery + " AND MasterCenterGroupKey = @GroupKey"
            sqlRequest.input("GroupKey", GroupKey);
        };

        let result = await sqlRequest.query(strQuery);

        return {
            statusCode: 200,
            data: result.recordset
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            message: ERROR_CONSTANT.getDataFail,
            data: error.message
        };
    }
}

exports.getProjectBannerList = async () => {
    try {
        let strQuery = `SELECT 'AdsUrl' = url.Name
            , 'Link' = link.Name
            FROM MST.MasterCenter url
            LEFT JOIN MST.MasterCenter link ON RIGHT(link.[Key], 2) = RIGHT(url.[Key], 2)
            WHERE url.[Key] LIKE ('BANNER_URL%') AND url.MasterCenterGroupKey ='APEasyProjectBanner'
            AND link.[Key] LIKE ('BANNER_LINK%') AND link.MasterCenterGroupKey ='APEasyProjectBanner'
            AND link.IsDeleted = 0 AND link.IsActive = 1
            AND url.IsDeleted = 0 AND url.IsActive = 1
            ORDER BY url.[Key]`;

        let pool = await new CRM_sql.connect(CRM_connection);
        let result = await pool.request().query(strQuery);

        await pool.close();

        return {
            statusCode: 200,
            data: result.recordset
        };
    } catch (error) {
        return {
            statusCode: 500,
            message: ERROR_CONSTANT.getDataFail,
            data: error.message,
        };
    };
}

exports.getBankBannerList = async (ProjectNo) => {
    try {

        let pool = await new CRM_sql.connect(CRM_connection);
        let sqlRequest = await pool.request();

        let strQuery = `SELECT bk.ID
                , bk.NameTH
                , bk.NameEN
                , bk.Alias
                , bbf.FilePathBanner
                , bbf.Telephone
                , bbf.LineID
                , bbf.FilePathPDF
                , bbf.BankOfficerName
            FROM MST.BankBannerFileAPConnect bbf
            LEFT JOIN PRJ.Project pj ON pj.ID = bbf.ProjectID
            LEFT JOIN MST.Bank bk ON bk.ID = bbf.BankID
            WHERE 1=1`;

        if (ProjectNo) {
            strQuery += " AND pj.ProjectNo = @ProjectNo"
            sqlRequest.input("ProjectNo", ProjectNo);
        };

        strQuery += ' ORDER BY bbf.[Order];';

        let result = await sqlRequest.query(strQuery);
        await pool.close();

        return {
            statusCode: 200,
            data: result.recordset
        };
    } catch (error) {
        return {
            statusCode: 500,
            message: ERROR_CONSTANT.getDataFail,
            data: error.message,
        };
    };
}

exports.getProjectInformationList = async (ProjectNo) => {
    try {

        let pool = await new CRM_sql.connect(CRM_connection);
        let sqlRequest = await pool.request();

        let strQuery = `
        SELECT DISTINCT prj.ProjectNo
            , c.TaxID
            , baType.Name AS 'AccountType'
            , bank.NameTH AS 'AccountNameTH'
            , baType.NameEN AS 'AccountNameEN'
            , c.NameTH
            , c.NameEN
            , ba.CompanyCode
            , ba.ID
            , ba.CompanyID
            , ba.BankID
            , ba.ProvinceID
            , ba.BankBranchID
            , ba.BankAccountNo
            , ba.IsTransferAccount
            , ba.IsDirectDebit
            , ba.IsDirectCredit
            , ba.IsDepositAccount
            , ba.Created
            , ba.Updated
            , ba.IsDeleted
            , ba.BankAccountTypeMasterCenterID
            , ba.GLAccountNo
            , ba.IsActive
            , ba.IsPCard
            , ba.MerchantID
            , ba.ServiceCode
            , ba.GLAccountTypeID
            , ba.HasVat
            , ba.Name
            , ba.Remark
            , ba.GLRefCode
            , ba.TaxCode
            , ba.DisplayName
            , ba.IsForeignTransfer
            , ba.IsQRCode
            , ba.PCardGLAccountNo
            , ba.DRServiceCode
            , ba.GLAccountCategoryMasterCenterID
            , ba.IsBillPayment
            , ba.MobileMerchantID
        FROM MST.BankAccount ba
        LEFT JOIN MST.MasterCenter baType ON baType.ID = ba.BankAccountTypeMasterCenterID
        LEFT JOIN MST.Bank bank ON bank.ID = ba.BankID
        LEFT JOIN MST.Company c ON c.ID = ba.CompanyID
        LEFT JOIN PRJ.Project prj ON prj.CompanyID = c.ID
        WHERE ba.IsBillPayment = 1
          AND bank.ID IS NOT NULL
          AND c.ID IS NOT NULL
          AND prj.ID IS NOT NULL`;

        if (ProjectNo) {
            strQuery += " AND prj.ProjectNo = @ProjectNo"
            sqlRequest.input("ProjectNo", ProjectNo);
        };

        let result = await sqlRequest.query(strQuery);
        await pool.close();

        return {
            statusCode: 200,
            data: result.recordset
        };
    } catch (error) {
        return {
            statusCode: 500,
            message: ERROR_CONSTANT.getDataFail,
            data: error.message,
        };
    };
    
}
exports.getEmployeesList = async () => {
    try {
        
        let result = knex.select('*').from('Employees')
            .then(function(dept){
                dept.forEach(function(dept){
                    console.log(dept);
                });
            }).catch(function(err){
                console.log(err); ; knex.destroy(); 
            }).finally(function(){
                knex.destroy(); 
            });
        
        //let result = await sqlRequest.query(strQuery);
        //await pool.close();

        return {
            statusCode: 200,
            data: result.recordset
        };
    } catch (error) {
        return {
            statusCode: 500,
            message: ERROR_CONSTANT.getDataFail,
            data: error.message,
        };
    };
}