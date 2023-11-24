const express = require("express");
const router = express.Router();

import { sendEmails } from "../controllers/email.controller";

router.post("/send-emails", sendEmails);
module.exports = router;
