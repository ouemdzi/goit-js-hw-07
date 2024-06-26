function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();
  const markup = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 10px;"></div>`;
    markup.push(box);
  }
  boxes.insertAdjacentHTML("beforeend", markup.join(""));
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
