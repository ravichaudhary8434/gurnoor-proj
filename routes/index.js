require("dotenv").config();
const express = require("express");
const router = express.Router();

router.get("/user", (req, res, next) => {
  try {
    let accountNumber = process.env.ACCOUNT_NUMBER;
    let isPayment = process.env.IS_PAYMENT === "true" ? true : false;
    let result = {};

    result.accountNumber = accountNumber;
    result.isPayment = isPayment;
    result.message = "Successfully fetched details.";
    return res.json(result);
  } catch (err) {
    throwErr(err, next);
  }
});

module.exports = router;
