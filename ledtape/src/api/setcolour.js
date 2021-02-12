const express = require("express");

const router = express.Router();

const { Discovery } = require("magic-home");
const { Control } = require("magic-home");

router.post("/", (req, res) => {
  const discovery = new Discovery();
  discovery.scan(500).then((devices) => {
    const light = new Control(devices[0].address);
    light.setColor(req.body.red, req.body.green, req.body.blue, (response) => {
      res.json({
        message: response,
      });
    });
  });
});
module.exports = router;
