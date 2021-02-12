const express = require("express");

const router = express.Router();

const { Discovery } = require("magic-home");
const { Control } = require("magic-home");

router.get("/", (req, res) => {
  const discovery = new Discovery();
  discovery.scan(500).then((devices) => {
    const light = new Control(devices[0].address);
    light.queryState().then((success) => {
      // do something with the result
      res.json(success);
    });
  });
});

module.exports = router;
