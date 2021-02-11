const { Discovery } = require("magic-home");
const { Control } = require("magic-home");

let address;

// let discovery = new Discovery();
// discovery
//   .scan(500)
//   .then((devices) => {
//     console.log(devices);
//     address = devices[0].address;
//   })
//   .then(turnOff());

function turnOff() {
  let light = new Control("192.168.0.66");
  light.setPower(false).then((success) => {
    // do something with the result
    console.log(success);
  });
}

function turnOn() {
  let light = new Control("192.168.0.66");
  light.setPower(true).then((success) => {
    // do something with the result
    console.log(success);
  });
}
let light = new Control("192.168.0.66");

turnOn();

function turnOn() {
  light.setWhites(255, 255).then((success) => {
    // do something with the result
    console.log(success);
  });
}

light.queryState((state) => {
  console.log(state);
});
