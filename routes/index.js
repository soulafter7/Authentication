const express = require('express');
const router = express.Router();

// get propertylist
router.use("/api/v1/crm-master", require("./master"));

module.exports = router;