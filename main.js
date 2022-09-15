// VARIABLES
const count = document.querySelector(".container__count");
const addBtn = document.querySelector(".container__buttons--add");
const resetBtn = document.querySelector(".container__buttons--reset");
const subtractBtn = document.querySelector(".container__buttons--subtract");

// EVENT LISTENERS

addBtn.addEventListener("click", () => {
  count.innerHTML++;
  colorBasedOnCount();
});
subtractBtn.addEventListener("click", () => {
  count.innerHTML--;
  colorBasedOnCount();
});
resetBtn.addEventListener("click", () => {
  count.innerHTML = 0;
  colorBasedOnCount();
});

const colorBasedOnCount = () => {
  if (count.innerHTML > 0) {
    count.style.color = "limegreen";
  } else if (count.innerHTML < 0) {
    count.style.color = "crimson";
  } else {
    count.style.color = "black";
  }
};
