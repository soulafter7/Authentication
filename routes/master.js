const router = require("express").Router();
const Master = require("../src/master.controller");

router.get('/ProjectBanner', Master.GetProjectBanners);
router.get('/APContact', Master.GetAPContact);
router.get('/DocumentHeader', Master.GetDocumentHeader);
router.get('/DocumentDetail', Master.GetDocumentDetail);
router.get('/BankBanner', Master.GetBankBanner);
router.get('/ProjectInformation', Master.GetProjectInformation);

router.get('/Test', Master.Test);
router.get('/EmployeesList',Master.GetEmployee);

module.exports = router; 