const { ICRM_sql, ICRM_connection } = require("../db/icrmconnection");;
const { ERROR_CONSTANT } = require('../utils/error');

exports.getICRMAPContactList = async (Type, Key) => {
    try {
        let strQuery = `SELECT * FROM MST.APContactDetail WHERE IsActive = 1`;

        let pool = await new ICRM_sql.connect(ICRM_connection);
        let sqlRequest = await pool.request();

        if (Type) {
            strQuery += " AND [Type] = @Type"
            sqlRequest.input("Type", Type);
        };

        if (Key) {
            strQuery += " AND [Key] = @Key"
            sqlRequest.input("Key", Key);
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

exports.getDocumentHeaderLevel1List = async (ID) => {
    try {
        let strQuery = `SELECT * From DOC.DocumentHeaderLevel1 WHERE 1=1`;

        let pool = await new ICRM_sql.connect(ICRM_connection);
        let sqlRequest = await pool.request();

        if (ID) {
            strQuery += " AND DocumentHeaderID = @ID"
            await sqlRequest.input("ID", ID);
        };

        strQuery += ' ORDER BY OrderOfDocumentHeader';

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

exports.getDocumentDetailLevel2List = async (ID, RefID) => {
    try {
        let strQuery = `SELECT * FROM DOC.DocumentDetailLevel2 WHERE 1=1`;

        let pool = await new ICRM_sql.connect(ICRM_connection);
        let sqlRequest = await pool.request();

        if (ID) {
            strQuery += " AND DocumentDetailID = @ID"
            sqlRequest.input("ID", ID);
        };

        if (RefID) {
            strQuery += " AND RefDocumentHeaderID = @RefID"
            sqlRequest.input("RefID", RefID);
        };

        strQuery += ' ORDER BY OrderOfDocumentDetail';

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

exports.getSubDocumentDetailLevel3List = async (ID, RefID) => {
    try {
        let strQuery = `SELECT * FROM DOC.SubDocumentDetailLevel3 WHERE 1=1`;

        let pool = await new ICRM_sql.connect(ICRM_connection);
        let sqlRequest = await pool.request();

        if (ID) {
            strQuery += " AND SubDocumentDetailID = @ID"
            sqlRequest.input("ID", ID);
        };

        if (RefID) {
            var RefIDType = typeof RefID;
            if (RefIDType == "number") {
                strQuery += " AND RefDocumentDetailID = @RefID"
                sqlRequest.input("RefID", RefID);
            };

            if (RefIDType == "object" && RefIDType.length > 0) {
                var inParam = [];
                for (let i = 0; i < RefID.length; i++) {
                    inParam.push("@RefID_" + i);
                    sqlRequest.input("RefID_" + i, RefID[i]);
                }
                strQuery += ` AND RefDocumentDetailID IN (${inParam.join(', ')})`
            };
        };

        strQuery += ' ORDER BY OrderOfSubDocumentDetail';

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