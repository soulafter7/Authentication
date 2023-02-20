const miniosrv = require('../utils/Minio');

exports.mapProjectBannerDTO = async (input) => {
  const output = [];
  if (input) {
    for (const tmp of input) {
      const mapModel = {
        AdsUrl: tmp.AdsUrl,
        Link: tmp.Link
      };
      output.push(mapModel);
    };
  };
  return output;
};

exports.mapAPContactDTO = async (input) => {
  const output = [];
  if (input) {
    for (const tmp of input) {
      const mapModel = {
        Name: tmp.Key,
        Remark: tmp.Description,
        Type: tmp.Type,
        ContactValue: tmp.Value
      };
      output.push(mapModel);
    };
  };
  return output;
};

exports.mapDocumentHeaderDTO = async (input) => {
  const output = [];
  if (input) {
    for (const tmp of input) {
      const mapModel = {
        HeaderID: tmp.DocumentHeaderID,
        NameTH: tmp.DocumentHeaderNameTH,
        NameEN: tmp.DocumentHeaderNameEN,
        Order: tmp.OrderOfDocumentHeader,
        Status: tmp.StatusDocumentHeader,
        URL: tmp.URLDocumentHeader
      };
      output.push(mapModel);
    };
  };
  return output;
};

exports.mapDocumentDetailDTO = async (detail, subDetail) => {
  const output = [];
  if (detail) {
    for (const tmp of detail) {
      var tmpSubDet = []
      if (subDetail) {
        tmpSubDet = subDetail.filter(function (el) { return el.RefDocumentDetailID == tmp.DocumentDetailID });
      };
      const mapModel = {
        DocumentDetailID: tmp.DocumentDetailID,
        DocumentDetailNameTH: tmp.DocumentDetailNameTH,
        DocumentDetailNameEN: tmp.DocumentDetailNameEN,
        OrderOfDocumentDetail: tmp.OrderOfDocumentDetail,
        RefDocumentHeaderID: tmp.RefDocumentHeaderID,
        StatusDocumentDetail: tmp.StatusDocumentDetail,
        URLDocumentDetail: tmp.URLDocumentDetail,
        SubDoct: tmpSubDet
      };
      output.push(mapModel);
    };
  };
  return output;
};

exports.mapBankBannerDTO = async (input) => {
  const output = [];
  if (input) {
    for (const tmp of input) {
      const mapModel = {
        ID: tmp.ID,
        NameTH: tmp.NameTH,
        NameEN: tmp.NameEN,
        PhoneNumber: tmp.Telephone,
        Alias: tmp.Alias,
        LineID: tmp.LineID,
        FilePathBanner: tmp.BannerURL,
        PDF: tmp.PDFURL,
        BankOfficerName: tmp.BankOfficerName
      };
      output.push(mapModel);
    };
  };
  return output;
};

exports.mapProjectInformationDTO = async (input) => {
  const output = [];
  if (input) {
    for (const tmp of input) {
      const mapModel = {
        Name: tmp.Name,
        TaxID: tmp.TaxID,
        AccountType: tmp.AccountType,
        AccountNameTH: tmp.AccountNameTH,
        AccountNameEN: tmp.AccountNameEN,
        MerchantID: tmp.MerchantID,
        IsPCard: tmp.IsPCard,
        GLAccountNo: tmp.GLAccountNo,
        ServiceCode: tmp.ServiceCode,
        BankAccountNo: tmp.BankAccountNo,
        BillerID: tmp.BillerID,
        CompanyID: tmp.CompanyID,
        ProjectID: tmp.ProjectID,
        NameTH: tmp.NameTH,
        NameEN: tmp.NameEN,
        CompanyCode: tmp.CompanyCode
      };
      output.push(mapModel);
    };
  };
  return output;
};

exports.GetEmployeeDTO = async (input) => {
  const output = [];
  if (input) {
    for (const tmp of input) {
      const mapModel = {
        Empid: tmp.Empid,
        EmpCode: tmp.EmpCode,
        EmpName: tmp.EmpName,
        EmpLastName: tmp.EmpLastName
      };
      output.push(mapModel);
    };
  };
  return output;
};