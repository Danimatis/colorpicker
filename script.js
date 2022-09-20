const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const savedColor = document.getElementById("div-1");
const displayColor = document.getElementById("div-2");
const savedColor2 = document.getElementById("div-3");
const submitBtn = document.getElementById("submit");
const colorList = document.getElementById("color-list");
const colorArray = [];

let color;

function setColor(red, green, blue) {
  if (
    Number(redInput.value) <= 255 &&
    Number(greenInput.value) <= 255 &&
    Number(blueInput.value) <= 255 &&
    redInput.value &&
    greenInput.value &&
    blueInput.value
  ) {
    color = `rgb(${red},${green},${blue})`;
    displayColor.style.backgroundColor = color;
    colorArray.push(color);
  } else throw new Error("NOOOO");
}
function saveColor() {
  if (!savedColor.style.backgroundColor) {
    savedColor.style.backgroundColor = color;
  } else {
    savedColor2.style.backgroundColor = savedColor.style.backgroundColor;
    savedColor.style.backgroundColor = color;
  }
}

function clearValues() {
  redInput.value = "";
  greenInput.value = "";
  blueInput.value = "";
}
function pushToList() {
  let colorListArray = colorArray.map(
    (color) => `<li class="list-group-item" style="color: #FFFFFF;
    background: #FFFFFF;
    text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5; background-color: ${color}
    
    ">${color}</li>`
  );
  colorList.innerHTML = colorListArray.join("");
}

submitBtn.addEventListener("click", function () {
  if (displayColor.style.backgroundColor) {
    saveColor();
  }
  try {
    setColor(redInput.value, greenInput.value, blueInput.value);
  } catch (e) {
    {
      alert(e.message);
    }
  }
  clearValues();
  pushToList();
});
