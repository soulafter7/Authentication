const { ERROR_CONSTANT } = require('../utils/error');
const ResponseCtrl = require('../utils/ResponseUtils');
const masterService = require('./master.service');

const method = {
    GetProjectBanners: async (req, res) => {
        try {
            const bannerList = await masterService.getProjectBannerList();
            return await ResponseCtrl.res(res, bannerList);
        } catch (error) {
            return {
                statusCode: 500,
                message: ERROR_CONSTANT.internalServerError,
                data: error
            };
        };
    },
    GetAPContact: async (req, res) => {
        try {
            const APContacts = await masterService.getAPContactList();
            return await ResponseCtrl.res(res, APContacts);
        } catch (error) {
            return {
                statusCode: 500,
                message: ERROR_CONSTANT.internalServerError,
                data: error
            };
        };
    },
    GetDocumentHeader: async (req, res) => {
        try {
            const DocumentHeader = await masterService.getDocumentHeaderList(req.query.id);
            return await ResponseCtrl.res(res, DocumentHeader);
        } catch (error) {
            return {
                statusCode: 500,
                message: ERROR_CONSTANT.internalServerError,
                data: error
            };
        };
    },
    GetDocumentDetail: async (req, res) => {
        try {
            const DocumentHeader = await masterService.getDocumentDetailList(req.query.id);
            return await ResponseCtrl.res(res, DocumentHeader);
        } catch (error) {
            return {
                statusCode: 500,
                message: ERROR_CONSTANT.internalServerError,
                data: error
            };
        };
    },
    GetBankBanner: async (req, res) => {
        try {
            const BankBanner = await masterService.getBankBannerList(req.query.projectno);
            return await ResponseCtrl.res(res, BankBanner);
        } catch (error) {
            return {
                statusCode: 500,
                message: ERROR_CONSTANT.internalServerError,
                data: error
            };
        };
    },
    GetProjectInformation: async (req, res) => {
        try {
            const ProjectInfo = await masterService.getProjectInformationList(req.query.projectno);
            return await ResponseCtrl.res(res, ProjectInfo);
        } catch (error) {
            return {
                statusCode: 500,
                message: ERROR_CONSTANT.internalServerError,
                data: error
            };
        };
    }

    , Test: async (req, res) => {
        try {
            const DocumentHeader = await masterService.Test();
            return await ResponseCtrl.res(res, DocumentHeader);
        } catch (error) {
            return {
                statusCode: 500,
                message: ERROR_CONSTANT.internalServerError,
                data: error
            };
        };
    }
    ,GetEmployee: async (req, res) => {
        try {
            const DocumentHeader = await masterService.getEmployeeList();
            console.log(DocumentHeader);
            return await ResponseCtrl.res(res, DocumentHeader);
        } catch (error) {
            return {
                statusCode: 500,
                message: ERROR_CONSTANT.internalServerError,
                data: error
            };
        };
    }
}

module.exports = method;