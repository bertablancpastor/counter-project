// Tu código aquí.
// const lowCount = document.querySelector(".prevBtn");
// const addCount = document.querySelector(".nextBtn");
const counter = document.querySelector("#counter");
let count = 0;

function lowerCount() {
  count--;
  counter.innerHTML = count;

  count < 0 ? (counter.style.color = "red") : (counter.style.color = "green");
}

function addCount() {
  console.log("Click on ADD COUNTER");
  count++;
  counter.innerHTML = count;

  count > 0 ? (counter.style.color = "green") : (counter.style.color = "red");
}
