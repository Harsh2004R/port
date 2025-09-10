// this route will handle cold start time on serverless deployment...
// it will simply return a ping data...

const express = require("express");
const router = express.Router();
const { ping } = require("../controllers/pingController.js");
router.get("/ping", ping);
module.exports = router;
