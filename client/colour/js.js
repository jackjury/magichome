const inputred = document.getElementById("red");
const inputgreen = document.getElementById("green");
const inputblue = document.getElementById("blue");
const swatch = document.getElementById("swatch");

const apiendpoint = "http://localhost:5000/api/v1/";

const state = {
  red: 0,
  green: 0,
  blue: 0,
  cw: 0,
};

function getStatus() {
  fetch(`${apiendpoint}status`)
    .then((response) => response.json())
    .then((data) => {
      state.red = data.color.red;
      state.green = data.color.green;
      state.blue = data.color.blue;
      state.cw = data.warm_white;
      setLocal(state);
      swatch.style.display = "block";
    });
}

function getColour() {
  state.red = inputred.value;
  state.green = inputgreen.value;
  state.blue = inputblue.value;

  setLocal(state);
  setRemote(state);
}

function setLocal(obj) {
  inputred.value = obj.red;
  inputgreen.value = obj.green;
  inputblue.value = obj.blue;

  swatch.style.backgroundColor =
    "rgb(" + obj.red + ", " + obj.green + ", " + obj.blue + ")";
}

function setRemote(obj) {
  fetch(`${apiendpoint}setcolour/`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
}

getStatus();
