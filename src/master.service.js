const crmMasterRepo = require('../repositories/crmmaster.repository');
const icrmMasterRepo = require('../repositories/icrmmaster.repository');
const masterDTO = require('./masterDTO');
const miniosrv = require('../utils/Minio');
// const { sendMail, mailBody } = require('../../users/utils/mail.service');

exports.getProjectBannerList = async () => {
    const projectBanners = await crmMasterRepo.getProjectBannerList();

    var Outputs = [];
    if (Object.keys(projectBanners.data).length != 0 && projectBanners.statusCode != 500) {
        Outputs = await masterDTO.mapProjectBannerDTO(projectBanners.data);
    };

    return {
        statusCode: 200,
        data: Outputs
    };
};

exports.getAPContactList = async () => {
    const apcontacts = await icrmMasterRepo.getICRMAPContactList();

    var Outputs = [];

    if (Object.keys(apcontacts.data).length != 0 && apcontacts.statusCode != 500) {
        Outputs = await masterDTO.mapAPContactDTO(apcontacts.data);
    };

    return {
        statusCode: 200,
        data: Outputs
    };
};

exports.getDocumentHeaderList = async (ID) => {
    const DocumentHeaders = await icrmMasterRepo.getDocumentHeaderLevel1List(ID);

    var Outputs = [];

    if (Object.keys(DocumentHeaders.data).length != 0 && DocumentHeaders.statusCode != 500) {
        Outputs = await masterDTO.mapDocumentHeaderDTO(DocumentHeaders.data);
    };

    return {
        statusCode: 200,
        data: Outputs
    };
};

exports.getDocumentDetailList = async (ID) => {
    const DocumentDetails = await icrmMasterRepo.getDocumentDetailLevel2List(undefined, ID);

    var Outputs = [];

    if (Object.keys(DocumentDetails.data).length != 0 && DocumentDetails.statusCode != 500) {
        const RefIDs = [];
        for (const tmp of DocumentDetails.data) {
            RefIDs.push(tmp.DocumentDetailID);
        };
        const SubDocumentDetails = await icrmMasterRepo.getSubDocumentDetailLevel3List(undefined, RefIDs);

        Outputs = await masterDTO.mapDocumentDetailDTO(DocumentDetails.data, SubDocumentDetails.data);
    };

    return {
        statusCode: 200,
        data: Outputs
    };
};

exports.getBankBannerList = async (ProjectNo) => {
    const BankBanners = await crmMasterRepo.getBankBannerList(ProjectNo);
    var Outputs = [];

    if (Object.keys(BankBanners.data).length != 0 && BankBanners.statusCode != 500) {

        for (const data of BankBanners.data) {
            await Object.assign(data, { BannerURL: '' });
            await Object.assign(data, { PDFURL: '' });
        };

        for (const item of BankBanners.data) {
            if (item.FilePathBanner) {
                item.BannerURL = await miniosrv.getFileMinio('apconect', item.FilePathBanner);
            };
            if (item.FilePathPDF) {
                item.PDFURL = await miniosrv.getFileMinio('apconect', item.FilePathPDF);
            };
        };

        Outputs = await masterDTO.mapBankBannerDTO(BankBanners.data);
    };

    return {
        statusCode: 200,
        data: Outputs
    };
};

exports.getProjectInformationList = async (ProjectNo) => {
    const ProjectInfos = await crmMasterRepo.getProjectInformationList(ProjectNo);

    var Outputs = [];

    if (Object.keys(ProjectInfos.data).length != 0 && ProjectInfos.statusCode != 500) {
        Outputs = await masterDTO.mapProjectInformationDTO(ProjectInfos.data);
    };

    return {
        statusCode: 200,
        data: Outputs
    };
};

exports.Test = async () => {
    var MailBody = {
        MailFrom: 'thirawuth_s@apthai.com',
        MailTo: 'thirawuth_s@apthai.com',
        MailCC : "",
        MailBCC : "",
        Topic: 'Test Sendmail',
        Detail: mailBody,
        MailType: 'SENDBCEMAIL',
        Key1: "",
        Key2: "",
        Key3: "",
        Key4: "",
        MailFromName: "",
        MailBCC: "",
        SendStatus: "",
        Result: ""
    }

    return {
        statusCode: 200,
    };
};

exports.getEmployeeList = async (ProjectNo) => {

    const EmpsInfos = await crmMasterRepo.getEmployeesList(ProjectNo); 
    //const ProjectInfos = await crmMasterRepo.getProjectInformationList(ProjectNo);
    var Outputs = [];

    if (Object.keys(ProjectInfos.data).length != 0 && ProjectInfos.statusCode != 500) {
        Outputs = await masterDTO.GetEmployeeDTO(EmpsInfos.data);
    };

    return {
        statusCode: 200,
        data: Outputs
    };
};