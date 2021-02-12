const express = require("express");

const emojis = require("./emojis");
const status = require("./status");
const setcolour = require("./setcolour");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/status", status);
router.use("/setcolour", setcolour);

module.exports = router;
